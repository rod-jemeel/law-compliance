"use client";

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { dashboardActions } from "../_redux/dashboard-slice";
import { Deadline } from "../_redux/dashboard-state";
import { saveDashboardState } from "../_redux/dashboard-storage";
import { RootState } from "@/store";

interface DeadlineModalProps {
  isOpen: boolean;
  onClose: () => void;
  deadline?: Deadline;
}

// Helper functions for date operations
const calculateDaysLeft = (dateString: string): number => {
  const today = new Date();
  const due = new Date(dateString);
  const diffTime = due.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
};

const formatDueDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

// Convert from formatted date string (e.g., "Jan 31, 2024") to YYYY-MM-DD for input
const formatDateForInput = (formattedDate: string): string => {
  const date = new Date(formattedDate);
  return date.toISOString().split("T")[0]; // Returns YYYY-MM-DD
};

export function AddDeadlineModal({ isOpen, onClose }: DeadlineModalProps) {
  const dispatch = useAppDispatch();
  const businesses = useAppSelector(
    (state: RootState) => state.dashboardState.businesses
  );

  const [title, setTitle] = useState("");
  const [businessId, setBusinessId] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setTitle("");
      setBusinessId(businesses.length > 0 ? businesses[0].id : "");
      setDueDate("");
    }
  }, [isOpen, businesses]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !businessId || !dueDate) return;

    const selectedBusiness = businesses.find((b) => b.id === businessId);
    if (!selectedBusiness) return;

    const formattedDueDate = formatDueDate(dueDate);
    const daysLeft = calculateDaysLeft(dueDate);

    const newDeadline: Deadline = {
      id: uuidv4(),
      title: title.trim(),
      businessId,
      businessName: selectedBusiness.name,
      dueDate: formattedDueDate,
      daysLeft,
    };

    dispatch(dashboardActions.addDeadline(newDeadline));
    // Save to local storage after adding
    setTimeout(() => {
      const state = dispatch((_, getState) => getState());
      saveDashboardState(state.dashboardState);
    }, 0);

    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Deadline</DialogTitle>
            <DialogDescription>
              Create a new deadline or reminder for your business compliance
              tasks.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="text-sm font-medium leading-none"
              >
                Title
              </label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="e.g., Renew Business Permit"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="business"
                className="text-sm font-medium leading-none"
              >
                Business
              </label>
              <select
                id="business"
                value={businessId}
                onChange={(e) => setBusinessId(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="" disabled>
                  Select a business
                </option>
                {businesses.map((business) => (
                  <option key={business.id} value={business.id}>
                    {business.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="dueDate"
                className="text-sm font-medium leading-none"
              >
                Due Date
              </label>
              <input
                id="dueDate"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Deadline</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function EditDeadlineModal({
  isOpen,
  onClose,
  deadline,
}: DeadlineModalProps) {
  const dispatch = useAppDispatch();
  const businesses = useAppSelector(
    (state: RootState) => state.dashboardState.businesses
  );

  const [title, setTitle] = useState("");
  const [businessId, setBusinessId] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Initialize form with deadline data when modal opens
  useEffect(() => {
    if (isOpen && deadline) {
      setTitle(deadline.title);
      setBusinessId(deadline.businessId); // Convert the formatted date to YYYY-MM-DD for the input
      try {
        setDueDate(formatDateForInput(deadline.dueDate));
      } catch {
        // If date parsing fails, set to empty
        setDueDate("");
      }
    }
  }, [isOpen, deadline]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!deadline || !title.trim() || !businessId || !dueDate) return;

    const selectedBusiness = businesses.find((b) => b.id === businessId);
    if (!selectedBusiness) return;

    const formattedDueDate = formatDueDate(dueDate);
    const daysLeft = calculateDaysLeft(dueDate);

    const updatedDeadline: Deadline = {
      ...deadline,
      title: title.trim(),
      businessId,
      businessName: selectedBusiness.name,
      dueDate: formattedDueDate,
      daysLeft,
    };
    dispatch(dashboardActions.updateDeadline(updatedDeadline));

    // Save to local storage after updating
    setTimeout(() => {
      const state = dispatch((_, getState) => getState());
      saveDashboardState(state.dashboardState);
    }, 0);

    onClose();
  };

  return (
    <Dialog open={isOpen && !!deadline} onOpenChange={onClose}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Deadline</DialogTitle>
            <DialogDescription>
              Update this deadline details or due date.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <label
                htmlFor="edit-title"
                className="text-sm font-medium leading-none"
              >
                Title
              </label>
              <input
                id="edit-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="e.g., Renew Business Permit"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="edit-business"
                className="text-sm font-medium leading-none"
              >
                Business
              </label>
              <select
                id="edit-business"
                value={businessId}
                onChange={(e) => setBusinessId(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="" disabled>
                  Select a business
                </option>
                {businesses.map((business) => (
                  <option key={business.id} value={business.id}>
                    {business.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="edit-dueDate"
                className="text-sm font-medium leading-none"
              >
                Due Date
              </label>
              <input
                id="edit-dueDate"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function ViewAllDeadlinesModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const dispatch = useAppDispatch();
  const deadlines = useAppSelector(
    (state: RootState) => state.dashboardState.upcomingDeadlines
  );

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const removeDeadline = (id: string) => {
    dispatch(dashboardActions.removeDeadline(id));

    // Save to local storage after removing
    setTimeout(() => {
      const state = dispatch((_, getState) => getState());
      saveDashboardState(state.dashboardState);
    }, 0);
  };

  // Sort deadlines by days left (ascending)
  const sortedDeadlines = [...deadlines].sort(
    (a, b) => a.daysLeft - b.daysLeft
  );

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>All Upcoming Deadlines</DialogTitle>
            <DialogDescription>
              Manage all your business compliance deadlines in one place.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <Button
              className="mb-4"
              onClick={() => {
                setIsAddModalOpen(true);
              }}
            >
              Add New Deadline
            </Button>

            {sortedDeadlines.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                You have no upcoming deadlines. Add some to stay on top of your
                compliance tasks.
              </p>
            ) : (
              <div className="space-y-4">
                {sortedDeadlines.map((deadline) => (
                  <div
                    key={deadline.id}
                    className="flex items-center justify-between p-4 border border-gray-300 rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium">{deadline.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {deadline.businessName}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium">{deadline.dueDate}</p>
                        <p className="text-sm text-muted-foreground">
                          {deadline.daysLeft} days left
                        </p>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeDeadline(deadline.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <AddDeadlineModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </>
  );
}
