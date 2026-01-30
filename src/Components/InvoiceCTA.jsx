import "../Styles/InvoicesComponent.css";

export default function InvoiceCTA() {
  return (
    <section className="inv-cta">
      <div className="inv-container inv-cta-box">
        <h2>Start invoicing in minutes</h2>
        <p>
          No setup fees. No hidden costs. Create your first invoice today.
        </p>
        <button>Create Invoice</button>
      </div>
    </section>
  );
}
