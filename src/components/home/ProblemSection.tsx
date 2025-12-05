import Link from "next/link";

export default function ProblemSection() {
  return (
    <section className="section-default opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
      <div className="page-container max-w-3xl">
        <h2 className="mb-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] [animation-delay:150ms]">
          The Plateau Every Scaling Brand Hits
        </h2>

        <p className="mb-6">
          You're running real traffic. You're spending $25k+/month on ads. Your
          team is capable—but something still isn't clicking.
        </p>

        <ul className="space-y-2 mb-6">
          <li>Your conversion rate is stuck.</li>
          <li>Your AOV isn't moving.</li>
          <li>Your email revenue is inconsistent.</li>
          <li>
            Your agency sends reports but not insights.
          </li>
          <li>
            Every improvement still feels like guesswork.
          </li>
        </ul>

        <p className="font-medium mb-6">
          Before you scale harder, you need clarity—not more chaos.
        </p>

        <div className="mt-6">
          <Link href="/audits" className="btn-primary">
            Get a CRO Audit
          </Link>
        </div>
      </div>
    </section>
  );
}

