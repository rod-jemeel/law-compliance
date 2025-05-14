import { useChecklist } from "../_redux/checklist-context";
import { ChecklistCard, ChecklistItem } from "../_components";

export function LocalRequirementsSection() {
  const { state, toggleChecklistItem, saveState } = useChecklist();
  const { localRequirements } = state;

  const handleSave = () => {
    saveState();
  };

  return (
    <ChecklistCard
      title="Local Level Requirements (Dumaguete City)"
      description="Steps to complete at the Dumaguete City government offices"
      onSave={handleSave}
    >
      <ChecklistItem
        id={localRequirements.barangayClearance.id}
        label={localRequirements.barangayClearance.label}
        description={localRequirements.barangayClearance.description}
        checked={localRequirements.barangayClearance.checked}
        onCheckedChange={() =>
          toggleChecklistItem("localRequirements", "barangayClearance")
        }
      />
      <ChecklistItem
        id={localRequirements.taxClearance.id}
        label={localRequirements.taxClearance.label}
        description={localRequirements.taxClearance.description}
        checked={localRequirements.taxClearance.checked}
        onCheckedChange={() =>
          toggleChecklistItem("localRequirements", "taxClearance")
        }
      />
      <ChecklistItem
        id={localRequirements.environmentalPermit.id}
        label={localRequirements.environmentalPermit.label}
        description={localRequirements.environmentalPermit.description}
        checked={localRequirements.environmentalPermit.checked}
        onCheckedChange={() =>
          toggleChecklistItem("localRequirements", "environmentalPermit")
        }
      />
      <ChecklistItem
        id={localRequirements.zoningClearance.id}
        label={localRequirements.zoningClearance.label}
        description={localRequirements.zoningClearance.description}
        checked={localRequirements.zoningClearance.checked}
        onCheckedChange={() =>
          toggleChecklistItem("localRequirements", "zoningClearance")
        }
      />
      <ChecklistItem
        id={localRequirements.sanitaryPermit.id}
        label={localRequirements.sanitaryPermit.label}
        description={localRequirements.sanitaryPermit.description}
        checked={localRequirements.sanitaryPermit.checked}
        onCheckedChange={() =>
          toggleChecklistItem("localRequirements", "sanitaryPermit")
        }
      />
      <ChecklistItem
        id={localRequirements.certificateOfOccupancy.id}
        label={localRequirements.certificateOfOccupancy.label}
        description={localRequirements.certificateOfOccupancy.description}
        checked={localRequirements.certificateOfOccupancy.checked}
        onCheckedChange={() =>
          toggleChecklistItem("localRequirements", "certificateOfOccupancy")
        }
      />
      <ChecklistItem
        id={localRequirements.fireSafetyInspection.id}
        label={localRequirements.fireSafetyInspection.label}
        description={localRequirements.fireSafetyInspection.description}
        checked={localRequirements.fireSafetyInspection.checked}
        onCheckedChange={() =>
          toggleChecklistItem("localRequirements", "fireSafetyInspection")
        }
      />
      <ChecklistItem
        id={localRequirements.mayorsPermit.id}
        label={localRequirements.mayorsPermit.label}
        description={localRequirements.mayorsPermit.description}
        checked={localRequirements.mayorsPermit.checked}
        onCheckedChange={() =>
          toggleChecklistItem("localRequirements", "mayorsPermit")
        }
      />
    </ChecklistCard>
  );
}
