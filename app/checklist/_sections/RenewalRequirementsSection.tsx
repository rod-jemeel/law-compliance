import { useChecklist } from "../_redux/checklist-context";
import { ChecklistCard, ChecklistItem } from "../_components";

export function RenewalRequirementsSection() {
  const { state, toggleChecklistItem, saveState } = useChecklist();
  const { renewalRequirements } = state;

  const handleSave = () => {
    saveState();
  };

  return (
    <ChecklistCard
      title="Annual Renewal Requirements"
      description="Complete these steps before January 20th each year"
      onSave={handleSave}
    >
      <ChecklistItem
        id={renewalRequirements.barangayClearanceRenewal.id}
        label={renewalRequirements.barangayClearanceRenewal.label}
        description={renewalRequirements.barangayClearanceRenewal.description}
        checked={renewalRequirements.barangayClearanceRenewal.checked}
        onCheckedChange={() =>
          toggleChecklistItem("renewalRequirements", "barangayClearanceRenewal")
        }
      />
      <ChecklistItem
        id={renewalRequirements.taxClearanceRenewal.id}
        label={renewalRequirements.taxClearanceRenewal.label}
        description={renewalRequirements.taxClearanceRenewal.description}
        checked={renewalRequirements.taxClearanceRenewal.checked}
        onCheckedChange={() =>
          toggleChecklistItem("renewalRequirements", "taxClearanceRenewal")
        }
      />
      <ChecklistItem
        id={renewalRequirements.environmentalPermitRenewal.id}
        label={renewalRequirements.environmentalPermitRenewal.label}
        description={renewalRequirements.environmentalPermitRenewal.description}
        checked={renewalRequirements.environmentalPermitRenewal.checked}
        onCheckedChange={() =>
          toggleChecklistItem(
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
          toggleChecklistItem("renewalRequirements", "annualSafetyInspection")
        }
      />
      <ChecklistItem
        id={renewalRequirements.sanitaryPermitRenewal.id}
        label={renewalRequirements.sanitaryPermitRenewal.label}
        description={renewalRequirements.sanitaryPermitRenewal.description}
        checked={renewalRequirements.sanitaryPermitRenewal.checked}
        onCheckedChange={() =>
          toggleChecklistItem("renewalRequirements", "sanitaryPermitRenewal")
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
          toggleChecklistItem(
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
          toggleChecklistItem("renewalRequirements", "mayorsPermitRenewal")
        }
      />
      <ChecklistItem
        id={renewalRequirements.birRegistrationRenewal.id}
        label={renewalRequirements.birRegistrationRenewal.label}
        description={renewalRequirements.birRegistrationRenewal.description}
        checked={renewalRequirements.birRegistrationRenewal.checked}
        onCheckedChange={() =>
          toggleChecklistItem("renewalRequirements", "birRegistrationRenewal")
        }
      />
    </ChecklistCard>
  );
}
