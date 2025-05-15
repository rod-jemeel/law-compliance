import { useChecklist } from "../_redux/checklist-context";
import { ChecklistCard, ChecklistItem } from "../_components";
import { ChecklistState } from "../_redux/checklist-schema";

export function LocalRequirementsSection() {
  const { state, toggleChecklistItem, saveState } = useChecklist();
  const { localRequirements } = state;

  const handleSave = () => {
    saveState();
  };
  const handleToggleAndSave = (section: string, itemKey: string) => {
    toggleChecklistItem(
      section as keyof Omit<ChecklistState, "activeTab" | "penaltyCalculator">,
      itemKey
    );
    // Save state immediately to ensure dashboard shows updated state
    setTimeout(() => saveState(), 10);
  };

  return (
    <ChecklistCard
      title="Local Level Requirements (City / Municipality)"
      description="Steps to complete at the City / Municipality government offices"
      onSave={handleSave}
    >
      <ChecklistItem
        id={localRequirements.barangayClearance.id}
        label={localRequirements.barangayClearance.label}
        description={localRequirements.barangayClearance.description}
        checked={localRequirements.barangayClearance.checked}
        onCheckedChange={() =>
          handleToggleAndSave("localRequirements", "barangayClearance")
        }
      />
      <ChecklistItem
        id={localRequirements.taxClearance.id}
        label={localRequirements.taxClearance.label}
        description={localRequirements.taxClearance.description}
        checked={localRequirements.taxClearance.checked}
        onCheckedChange={() =>
          handleToggleAndSave("localRequirements", "taxClearance")
        }
      />
      <ChecklistItem
        id={localRequirements.environmentalPermit.id}
        label={localRequirements.environmentalPermit.label}
        description={localRequirements.environmentalPermit.description}
        checked={localRequirements.environmentalPermit.checked}
        onCheckedChange={() =>
          handleToggleAndSave("localRequirements", "environmentalPermit")
        }
      />
      <ChecklistItem
        id={localRequirements.zoningClearance.id}
        label={localRequirements.zoningClearance.label}
        description={localRequirements.zoningClearance.description}
        checked={localRequirements.zoningClearance.checked}
        onCheckedChange={() =>
          handleToggleAndSave("localRequirements", "zoningClearance")
        }
      />
      <ChecklistItem
        id={localRequirements.sanitaryPermit.id}
        label={localRequirements.sanitaryPermit.label}
        description={localRequirements.sanitaryPermit.description}
        checked={localRequirements.sanitaryPermit.checked}
        onCheckedChange={() =>
          handleToggleAndSave("localRequirements", "sanitaryPermit")
        }
      />
      <ChecklistItem
        id={localRequirements.certificateOfOccupancy.id}
        label={localRequirements.certificateOfOccupancy.label}
        description={localRequirements.certificateOfOccupancy.description}
        checked={localRequirements.certificateOfOccupancy.checked}
        onCheckedChange={() =>
          handleToggleAndSave("localRequirements", "certificateOfOccupancy")
        }
      />
      <ChecklistItem
        id={localRequirements.fireSafetyInspection.id}
        label={localRequirements.fireSafetyInspection.label}
        description={localRequirements.fireSafetyInspection.description}
        checked={localRequirements.fireSafetyInspection.checked}
        onCheckedChange={() =>
          handleToggleAndSave("localRequirements", "fireSafetyInspection")
        }
      />
      <ChecklistItem
        id={localRequirements.mayorsPermit.id}
        label={localRequirements.mayorsPermit.label}
        description={localRequirements.mayorsPermit.description}
        checked={localRequirements.mayorsPermit.checked}
        onCheckedChange={() =>
          handleToggleAndSave("localRequirements", "mayorsPermit")
        }
      />
    </ChecklistCard>
  );
}
