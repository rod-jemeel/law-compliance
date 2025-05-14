import { useChecklist } from "../_redux/checklist-context";
import { ChecklistCard, ChecklistItem } from "../_components";
import { ChecklistState } from "../_redux/checklist-schema";

export function RenewalRequirementsSection() {
  const { state, toggleChecklistItem, saveState } = useChecklist();
  const { renewalRequirements } = state;

  const handleSave = () => {
    saveState();
  };
  const handleToggleAndSave = (
    section: keyof Omit<ChecklistState, "activeTab" | "penaltyCalculator">,
    itemKey: string
  ) => {
    toggleChecklistItem(section, itemKey);
    // Save state immediately to ensure dashboard shows updated state
    setTimeout(() => saveState(), 10);
  };

  return (
    <ChecklistCard
      title="Renewal Requirements"
      description="Required steps for business permit renewal"
      onSave={handleSave}
    >
      <ChecklistItem
        id={renewalRequirements.barangayClearanceRenewal.id}
        label={renewalRequirements.barangayClearanceRenewal.label}
        description={renewalRequirements.barangayClearanceRenewal.description}
        checked={renewalRequirements.barangayClearanceRenewal.checked}
        onCheckedChange={() =>
          handleToggleAndSave("renewalRequirements", "barangayClearanceRenewal")
        }
      />
      <ChecklistItem
        id={renewalRequirements.taxClearanceRenewal.id}
        label={renewalRequirements.taxClearanceRenewal.label}
        description={renewalRequirements.taxClearanceRenewal.description}
        checked={renewalRequirements.taxClearanceRenewal.checked}
        onCheckedChange={() =>
          handleToggleAndSave("renewalRequirements", "taxClearanceRenewal")
        }
      />
      <ChecklistItem
        id={renewalRequirements.environmentalPermitRenewal.id}
        label={renewalRequirements.environmentalPermitRenewal.label}
        description={renewalRequirements.environmentalPermitRenewal.description}
        checked={renewalRequirements.environmentalPermitRenewal.checked}
        onCheckedChange={() =>
          handleToggleAndSave(
            "renewalRequirements",
            "environmentalPermitRenewal"
          )
        }
      />
      <ChecklistItem
        id={renewalRequirements.annualSafetyInspection.id}
        label={renewalRequirements.annualSafetyInspection.label}
        description={renewalRequirements.annualSafetyInspection.description}
        checked={renewalRequirements.annualSafetyInspection.checked}
        onCheckedChange={() =>
          handleToggleAndSave("renewalRequirements", "annualSafetyInspection")
        }
      />
      <ChecklistItem
        id={renewalRequirements.sanitaryPermitRenewal.id}
        label={renewalRequirements.sanitaryPermitRenewal.label}
        description={renewalRequirements.sanitaryPermitRenewal.description}
        checked={renewalRequirements.sanitaryPermitRenewal.checked}
        onCheckedChange={() =>
          handleToggleAndSave("renewalRequirements", "sanitaryPermitRenewal")
        }
      />
      <ChecklistItem
        id={renewalRequirements.fireSafetyInspectionRenewal.id}
        label={renewalRequirements.fireSafetyInspectionRenewal.label}
        description={
          renewalRequirements.fireSafetyInspectionRenewal.description
        }
        checked={renewalRequirements.fireSafetyInspectionRenewal.checked}
        onCheckedChange={() =>
          handleToggleAndSave(
            "renewalRequirements",
            "fireSafetyInspectionRenewal"
          )
        }
      />
      <ChecklistItem
        id={renewalRequirements.mayorsPermitRenewal.id}
        label={renewalRequirements.mayorsPermitRenewal.label}
        description={renewalRequirements.mayorsPermitRenewal.description}
        checked={renewalRequirements.mayorsPermitRenewal.checked}
        onCheckedChange={() =>
          handleToggleAndSave("renewalRequirements", "mayorsPermitRenewal")
        }
      />
      <ChecklistItem
        id={renewalRequirements.birRegistrationRenewal.id}
        label={renewalRequirements.birRegistrationRenewal.label}
        description={renewalRequirements.birRegistrationRenewal.description}
        checked={renewalRequirements.birRegistrationRenewal.checked}
        onCheckedChange={() =>
          handleToggleAndSave("renewalRequirements", "birRegistrationRenewal")
        }
      />
    </ChecklistCard>
  );
}
