import { useChecklist } from "../_redux/checklist-context";
import { ChecklistCard, ChecklistItem } from "../_components";

export function RenewalDocumentsSection() {
  const { state, toggleChecklistItem, saveState } = useChecklist();
  const { renewalDocuments } = state;

  const handleSave = () => {
    saveState();
  };

  return (
    <ChecklistCard
      title="Required Documents for Renewal"
      description="Prepare these documents before starting the renewal process"
      onSave={handleSave}
    >
      <ChecklistItem
        id={renewalDocuments.previousPermit.id}
        label={renewalDocuments.previousPermit.label}
        description={renewalDocuments.previousPermit.description}
        checked={renewalDocuments.previousPermit.checked}
        onCheckedChange={() =>
          toggleChecklistItem("renewalDocuments", "previousPermit")
        }
      />
      <ChecklistItem
        id={renewalDocuments.incomeTaxReturns.id}
        label={renewalDocuments.incomeTaxReturns.label}
        description={renewalDocuments.incomeTaxReturns.description}
        checked={renewalDocuments.incomeTaxReturns.checked}
        onCheckedChange={() =>
          toggleChecklistItem("renewalDocuments", "incomeTaxReturns")
        }
      />
      <ChecklistItem
        id={renewalDocuments.cedula.id}
        label={renewalDocuments.cedula.label}
        description={renewalDocuments.cedula.description}
        checked={renewalDocuments.cedula.checked}
        onCheckedChange={() =>
          toggleChecklistItem("renewalDocuments", "cedula")
        }
      />
      <ChecklistItem
        id={renewalDocuments.insurancePolicy.id}
        label={renewalDocuments.insurancePolicy.label}
        description={renewalDocuments.insurancePolicy.description}
        checked={renewalDocuments.insurancePolicy.checked}
        onCheckedChange={() =>
          toggleChecklistItem("renewalDocuments", "insurancePolicy")
        }
      />
      <ChecklistItem
        id={renewalDocuments.financialStatements.id}
        label={renewalDocuments.financialStatements.label}
        description={renewalDocuments.financialStatements.description}
        checked={renewalDocuments.financialStatements.checked}
        onCheckedChange={() =>
          toggleChecklistItem("renewalDocuments", "financialStatements")
        }
      />
      <ChecklistItem
        id={renewalDocuments.leaseContract.id}
        label={renewalDocuments.leaseContract.label}
        description={renewalDocuments.leaseContract.description}
        checked={renewalDocuments.leaseContract.checked}
        onCheckedChange={() =>
          toggleChecklistItem("renewalDocuments", "leaseContract")
        }
      />
      <ChecklistItem
        id={renewalDocuments.socialSecurityRegistrations.id}
        label={renewalDocuments.socialSecurityRegistrations.label}
        description={renewalDocuments.socialSecurityRegistrations.description}
        checked={renewalDocuments.socialSecurityRegistrations.checked}
        onCheckedChange={() =>
          toggleChecklistItem("renewalDocuments", "socialSecurityRegistrations")
        }
      />
      <ChecklistItem
        id={renewalDocuments.noOperationsAffidavit.id}
        label={renewalDocuments.noOperationsAffidavit.label}
        description={renewalDocuments.noOperationsAffidavit.description}
        checked={renewalDocuments.noOperationsAffidavit.checked}
        onCheckedChange={() =>
          toggleChecklistItem("renewalDocuments", "noOperationsAffidavit")
        }
      />
    </ChecklistCard>
  );
}
