"use client";

import { useState } from "react";
import { useAppDispatch } from "@/hooks/hooks";
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
import { Business } from "../_redux/dashboard-state";
import { saveDashboardState } from "../_redux/dashboard-storage";

interface BusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  business?: Business;
}

export function AddBusinessModal({ isOpen, onClose }: BusinessModalProps) {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [type, setType] = useState("Sole Proprietorship");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    const newBusiness: Business = {
      id: uuidv4(),
      name: name.trim(),
      type,
    };

    dispatch(dashboardActions.addBusiness(newBusiness));
    // Save to local storage after adding
    setTimeout(() => {
      const state = dispatch((_, getState) => getState()).dashboardState;
      saveDashboardState(state);
    }, 0);

    setName("");
    setType("Sole Proprietorship");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Business</DialogTitle>
            <DialogDescription>
              Enter the details of your business to add it to your dashboard.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none"
              >
                Business Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter business name"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="type"
                className="text-sm font-medium leading-none"
              >
                Business Type
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="Sole Proprietorship">Sole Proprietorship</option>
                <option value="Partnership">Partnership</option>
                <option value="Corporation">Corporation</option>
                <option value="Cooperative">Cooperative</option>
                <option value="LLC">LLC</option>
              </select>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Business</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function EditBusinessModal({
  isOpen,
  onClose,
  business,
}: BusinessModalProps) {
  const dispatch = useAppDispatch();
  const [name, setName] = useState(business?.name || "");
  const [type, setType] = useState(business?.type || "Sole Proprietorship");

  // Update local state when business prop changes
  useState(() => {
    if (business) {
      setName(business.name);
      setType(business.type);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!business || !name.trim()) return;

    const updatedBusiness: Business = {
      ...business,
      name: name.trim(),
      type,
    };

    dispatch(dashboardActions.updateBusiness(updatedBusiness));
    // Save to local storage after updating
    setTimeout(() => {
      const state = dispatch((_, getState) => getState()).dashboardState;
      saveDashboardState(state);
    }, 0);

    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Business</DialogTitle>
            <DialogDescription>
              Update the details of your business.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none"
              >
                Business Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter business name"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="type"
                className="text-sm font-medium leading-none"
              >
                Business Type
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="Sole Proprietorship">Sole Proprietorship</option>
                <option value="Partnership">Partnership</option>
                <option value="Corporation">Corporation</option>
                <option value="Cooperative">Cooperative</option>
                <option value="LLC">LLC</option>
              </select>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="destructive"
              onClick={() => {
                if (business) {
                  dispatch(dashboardActions.removeBusiness(business.id));

                  // Save to local storage after removing
                  setTimeout(() => {
                    setTimeout(() => {
                      const state = dispatch((_, getState) =>
                        getState()
                      ).dashboardState;
                      saveDashboardState(state);
                    }, 0);
                  }, 0);
                }
                onClose();
              }}
            >
              Delete
            </Button>
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
