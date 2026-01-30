
import "../Styles/SecurityTransparency.css";

export default function SecurityTransparency() {
    return (
        <section className="security-section">
            <div className="security-container">

                <div className="security-header">
                    <h2>Security & Transparency You Can Trust</h2>
                    <p>
                        Enterprise-grade protection, full transaction visibility, and
                        predictable pricing—built for modern crypto and fiat payments.
                    </p>
                </div>

                <div className="security-cards">

                    <div className="security-card">
                        <span className="icon">🔐</span>
                        <h3>Secure by Design</h3>
                        <p>
                            Operate with confidence using non-custodial or secure custody
                            options, giving you full control over how your funds are managed.
                        </p>
                    </div>

                    <div className="security-card">
                        <span className="icon">⛓️</span>
                        <h3>On-Chain Transparency</h3>
                        <p>
                            Every crypto transaction is verifiable on the blockchain,
                            ensuring traceability, auditability, and trust.
                        </p>
                    </div>

                    <div className="security-card">
                        <span className="icon">💳</span>
                        <h3>Clear & Predictable Fees</h3>
                        <p>
                            Simple, transparent fee models with no hidden charges—making
                            reconciliation and reporting effortless.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}