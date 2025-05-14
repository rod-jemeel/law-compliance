import { useChecklist } from "../_redux/checklist-context";
import { ChecklistCard, ChecklistItem } from "../_components";

export function RenewalDocumentsSection() {
  const { state, toggleChecklistItem, saveState } = useChecklist();
  const { renewalDocuments } = state;

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
      title="Required Documents for Renewal"
      description="Prepare these documents for business permit renewal"
      onSave={handleSave}
    >
      <ChecklistItem
        id={renewalDocuments.previousPermit.id}
        label={renewalDocuments.previousPermit.label}
        description={renewalDocuments.previousPermit.description}
        checked={renewalDocuments.previousPermit.checked}
        onCheckedChange={() =>
          handleToggleAndSave("renewalDocuments", "previousPermit")
        }
      />
      <ChecklistItem
        id={renewalDocuments.incomeTaxReturns.id}
        label={renewalDocuments.incomeTaxReturns.label}
        description={renewalDocuments.incomeTaxReturns.description}
        checked={renewalDocuments.incomeTaxReturns.checked}
        onCheckedChange={() =>
          handleToggleAndSave("renewalDocuments", "incomeTaxReturns")
        }
      />
      <ChecklistItem
        id={renewalDocuments.cedula.id}
        label={renewalDocuments.cedula.label}
        description={renewalDocuments.cedula.description}
        checked={renewalDocuments.cedula.checked}
        onCheckedChange={() =>
          handleToggleAndSave("renewalDocuments", "cedula")
        }
      />
      <ChecklistItem
        id={renewalDocuments.insurancePolicy.id}
        label={renewalDocuments.insurancePolicy.label}
        description={renewalDocuments.insurancePolicy.description}
        checked={renewalDocuments.insurancePolicy.checked}
        onCheckedChange={() =>
          handleToggleAndSave("renewalDocuments", "insurancePolicy")
        }
      />
      <ChecklistItem
        id={renewalDocuments.financialStatements.id}
        label={renewalDocuments.financialStatements.label}
        description={renewalDocuments.financialStatements.description}
        checked={renewalDocuments.financialStatements.checked}
        onCheckedChange={() =>
          handleToggleAndSave("renewalDocuments", "financialStatements")
        }
      />
      <ChecklistItem
        id={renewalDocuments.leaseContract.id}
        label={renewalDocuments.leaseContract.label}
        description={renewalDocuments.leaseContract.description}
        checked={renewalDocuments.leaseContract.checked}
        onCheckedChange={() =>
          handleToggleAndSave("renewalDocuments", "leaseContract")
        }
      />
      <ChecklistItem
        id={renewalDocuments.socialSecurityRegistrations.id}
        label={renewalDocuments.socialSecurityRegistrations.label}
        description={renewalDocuments.socialSecurityRegistrations.description}
        checked={renewalDocuments.socialSecurityRegistrations.checked}
        onCheckedChange={() =>
          handleToggleAndSave("renewalDocuments", "socialSecurityRegistrations")
        }
      />
      <ChecklistItem
        id={renewalDocuments.noOperationsAffidavit.id}
        label={renewalDocuments.noOperationsAffidavit.label}
        description={renewalDocuments.noOperationsAffidavit.description}
        checked={renewalDocuments.noOperationsAffidavit.checked}
        onCheckedChange={() =>
          handleToggleAndSave("renewalDocuments", "noOperationsAffidavit")
        }
      />
    </ChecklistCard>
  );
}
