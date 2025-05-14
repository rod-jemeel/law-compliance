import { useChecklist } from "../_redux/checklist-context";
import { ChecklistCard, ChecklistItem } from "../_components";

export function NationalRequirementsSection() {
  const { state, toggleChecklistItem, saveState } = useChecklist();
  const { nationalRequirements } = state;

  const handleSave = () => {
    saveState();
  };

  return (
    <ChecklistCard
      title="National Level Requirements"
      description="Complete these steps before proceeding to local registration"
      onSave={handleSave}
    >
      <ChecklistItem
        id={nationalRequirements.businessStructure.id}
        label={nationalRequirements.businessStructure.label}
        description={nationalRequirements.businessStructure.description}
        checked={nationalRequirements.businessStructure.checked}
        onCheckedChange={() =>
          toggleChecklistItem("nationalRequirements", "businessStructure")
        }
      />
      <ChecklistItem
        id={nationalRequirements.businessNameRegistration.id}
        label={nationalRequirements.businessNameRegistration.label}
        description={nationalRequirements.businessNameRegistration.description}
        checked={nationalRequirements.businessNameRegistration.checked}
        onCheckedChange={() =>
          toggleChecklistItem(
            "nationalRequirements",
            "businessNameRegistration"
          )
        }
      />
      <ChecklistItem
        id={nationalRequirements.secRegistration.id}
        label={nationalRequirements.secRegistration.label}
        description={nationalRequirements.secRegistration.description}
        checked={nationalRequirements.secRegistration.checked}
        onCheckedChange={() =>
          toggleChecklistItem("nationalRequirements", "secRegistration")
        }
      />
      <ChecklistItem
        id={nationalRequirements.tinRegistration.id}
        label={nationalRequirements.tinRegistration.label}
        description={nationalRequirements.tinRegistration.description}
        checked={nationalRequirements.tinRegistration.checked}
        onCheckedChange={() =>
          toggleChecklistItem("nationalRequirements", "tinRegistration")
        }
      />
      <ChecklistItem
        id={nationalRequirements.birRegistration.id}
        label={nationalRequirements.birRegistration.label}
        description={nationalRequirements.birRegistration.description}
        checked={nationalRequirements.birRegistration.checked}
        onCheckedChange={() =>
          toggleChecklistItem("nationalRequirements", "birRegistration")
        }
      />
      <ChecklistItem
        id={nationalRequirements.booksOfAccounts.id}
        label={nationalRequirements.booksOfAccounts.label}
        description={nationalRequirements.booksOfAccounts.description}
        checked={nationalRequirements.booksOfAccounts.checked}
        onCheckedChange={() =>
          toggleChecklistItem("nationalRequirements", "booksOfAccounts")
        }
      />
      <ChecklistItem
        id={nationalRequirements.authorityToPrint.id}
        label={nationalRequirements.authorityToPrint.label}
        description={nationalRequirements.authorityToPrint.description}
        checked={nationalRequirements.authorityToPrint.checked}
        onCheckedChange={() =>
          toggleChecklistItem("nationalRequirements", "authorityToPrint")
        }
      />
    </ChecklistCard>
  );
}
