import { useChecklist } from "../_redux/checklist-context";
import { ChecklistCard, ChecklistItem } from "../_components";

export function NationalRequirementsSection() {
  const { state, toggleChecklistItem, saveState } = useChecklist();
  const { nationalRequirements } = state;

  const handleSave = () => {
    saveState();
  };

  const handleToggleAndSave = (section: string, itemKey: string) => {
    toggleChecklistItem(section as any, itemKey);
    // Save state immediately to ensure dashboard shows updated state
    setTimeout(() => saveState(), 10);
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
          handleToggleAndSave("nationalRequirements", "businessStructure")
        }
      />
      <ChecklistItem
        id={nationalRequirements.businessNameRegistration.id}
        label={nationalRequirements.businessNameRegistration.label}
        description={nationalRequirements.businessNameRegistration.description}
        checked={nationalRequirements.businessNameRegistration.checked}
        onCheckedChange={() =>
          handleToggleAndSave(
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
          handleToggleAndSave("nationalRequirements", "secRegistration")
        }
      />
      <ChecklistItem
        id={nationalRequirements.tinRegistration.id}
        label={nationalRequirements.tinRegistration.label}
        description={nationalRequirements.tinRegistration.description}
        checked={nationalRequirements.tinRegistration.checked}
        onCheckedChange={() =>
          handleToggleAndSave("nationalRequirements", "tinRegistration")
        }
      />
      <ChecklistItem
        id={nationalRequirements.birRegistration.id}
        label={nationalRequirements.birRegistration.label}
        description={nationalRequirements.birRegistration.description}
        checked={nationalRequirements.birRegistration.checked}
        onCheckedChange={() =>
          handleToggleAndSave("nationalRequirements", "birRegistration")
        }
      />
      <ChecklistItem
        id={nationalRequirements.booksOfAccounts.id}
        label={nationalRequirements.booksOfAccounts.label}
        description={nationalRequirements.booksOfAccounts.description}
        checked={nationalRequirements.booksOfAccounts.checked}
        onCheckedChange={() =>
          handleToggleAndSave("nationalRequirements", "booksOfAccounts")
        }
      />
      <ChecklistItem
        id={nationalRequirements.authorityToPrint.id}
        label={nationalRequirements.authorityToPrint.label}
        description={nationalRequirements.authorityToPrint.description}
        checked={nationalRequirements.authorityToPrint.checked}
        onCheckedChange={() =>
          handleToggleAndSave("nationalRequirements", "authorityToPrint")
        }
      />
    </ChecklistCard>
  );
}
