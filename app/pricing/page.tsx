"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "../../components/Container";
import Image from "next/image";
import Button from "../../components/Button";

type BillingCycle = "monthly" | "yearly";

interface Feature {
  text: string;
}

interface PricingPlan {
  id: string;
  title: string;
  icon: string;
  width: number;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: Feature[];
  buttonText: string;
  buttonVariant: "primary" | "outline";
  isHighlighted?: boolean;
  isMostPopular?: boolean;
  href: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    title: "Free.",
    icon: "/images/pricing/free-tier.png",
    width: 54,
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    features: [
      { text: "0 submission credits per month" },
      { text: "50 track uploads stored" },
      { text: "Unlimited private links" },
      { text: "Private inbox sharing" },
      { text: "Track your submissions history" },
      { text: "View & edit your sender profile" },
      { text: "Basic support" },
    ],
    buttonText: "Choose plan",
    buttonVariant: "primary",
    href: "/pricing",
  },
  {
    id: "pro",
    title: "Pro.",
    icon: "/images/pricing/pro-tier.png",
    width: 71,
    description: "Nibh euismod tincidunt ut laoreet dolore magna.",
    monthlyPrice: "$20",
    yearlyPrice: "$200",
    features: [
      { text: "Inbox Public Sharing Links" },
      { text: "1,000 submission credits per month" },
      { text: "Unlimited track uploads" },
      { text: "Unlimited inbox links" },
      { text: "Unlimited professional contacts" },
      { text: "Public inbox & directory placement" },
      { text: "Boost campaign included" },
      { text: "Advanced contact management & analytics" },
      { text: "Track Tools AI suite access" },
      { text: "iOS & Android app" },
      { text: "200 artwork credits per month" },
      { text: "20% on-demand mastering discount" },
      { text: "Linkstack digital stage for artists" },
    ],
    buttonText: "Choose plan",
    buttonVariant: "primary",
    isMostPopular: true,
    href: "/pricing",
  },
  {
    id: "max",
    title: "Max.",
    icon: "/images/pricing/max-tier.png",
    width: 78,
    description: "Lorem ipsum dolor sit amet, consectetuer.",
    monthlyPrice: "$40",
    yearlyPrice: "$400",
    features: [
      { text: "Create workspaces for your acts & labels" },
      { text: "Central Inbox Management" },
      { text: "Unlimited Team Members" },
      { text: "Advanced Artist Profiles" },
      { text: "Dedicated Account Manager" },
      { text: "Priority WhatsApp Support" },
      { text: "Custom Marketing Integrations" },
      { text: "Customisable Submission Forms" },
      { text: "Access to Beta Features" },
    ],
    buttonText: "Choose plan",
    buttonVariant: "primary",
    href: "/pricing",
  },
  {
    id: "enterprise",
    title: "Enterprise.",
    icon: "/images/pricing/enterprise-tier.png",
    width: 63,
    description: "For managers, agents and companies.",
    monthlyPrice: "Flexible pricing",
    yearlyPrice: "Flexible pricing",
    features: [
      { text: "Create workspaces for your acts & labels" },
      { text: "Central Inbox Management" },
      { text: "Unlimited Team Members" },
      { text: "Advanced Artist Profiles" },
      { text: "Dedicated Account Manager" },
      { text: "Priority WhatsApp Support" },
      { text: "Custom Marketing Integrations" },
      { text: "Customisable Submission Forms" },
      { text: "Access to Beta Features" },
    ],
    buttonText: "Contact us",
    buttonVariant: "outline",
    href: "/pricing",
  },
];


function BillingToggle({
  value,
  onChange,
}: {
  value: BillingCycle;
  onChange: (value: BillingCycle) => void;
}) {
  return (
    <div className="flex items-center justify-center mb-8">
      <fieldset
        className="inline-flex rounded-[0.25em] border border-[var(--midnight-80)] bg-[var(--midnight-90)]"
        aria-label="Billing cycle selection"
      >
        <legend className="sr-only">Select billing cycle</legend>
        <button
          type="button"
          role="radio"
          aria-checked={value === "monthly"}
          aria-label="Monthly billing"
          onClick={() => onChange("monthly")}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
              e.preventDefault();
              onChange(value === "monthly" ? "yearly" : "monthly");
            }
          }}
          className={`px-6 py-2 rounded-[0.25em] text-sm font-medium transition-all duration-300 ${value === "monthly"
            ? "bg-[var(--midnight-80)] text-white -translate-y-0.5 shadow-lg"
            : "text-white/80 hover:text-white"
            }`}
        >
          Monthly
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={value === "yearly"}
          aria-label="Yearly billing"
          onClick={() => onChange("yearly")}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
              e.preventDefault();
              onChange(value === "monthly" ? "yearly" : "monthly");
            }
          }}
          className={`px-6 py-2 rounded-[0.25em] text-sm font-medium transition-all duration-300 ${value === "yearly"
            ? "bg-[var(--midnight-80)] text-white -translate-y-0.5 shadow-lg"
            : "text-white/80 hover:text-white"
            }`}
        >
          Yearly
        </button>
      </fieldset>
    </div>
  );
}

function PricingCard({ plan, billingCycle }: { plan: PricingPlan; billingCycle: BillingCycle }) {
  const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  const period = billingCycle === "monthly" ? "/month" : "/year";


  const priceDisplay = price === "Flexible pricing"
    ? "Flexible pricing"
    : `${price}${period}`;

  return (
    <article
      className="flex flex-col h-full p-[1.5em] rounded-[0.5em] border bg-[var(--midnight-95)] border-white/10 text-white relative transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hover:scale-[1.02] cursor-pointer focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-[var(--midnight)]"
      aria-labelledby={`plan-${plan.id}-title`}
      aria-describedby={`plan-${plan.id}-description plan-${plan.id}-price plan-${plan.id}-features`}
    >
      <div className="w-full flex justify-between mb-[1em]">
        <div>
          <Image
            src={plan.icon}
            alt={`${plan.title} plan icon`}
            width={plan.width}
            height={64}
            aria-hidden="true"
          />
        </div>
        {plan.isMostPopular && (
          <div className="mt-[0.5em] caption text-[var(--midnight-50)]" aria-label="Most popular plan">
            Most popular
          </div>
        )}
      </div>

      <h3 id={`plan-${plan.id}-title`} className="headline-04 mb-[0.5em]">{plan.title}</h3>
      <p id={`plan-${plan.id}-description`} className="body-copy mb-6 text-[#fff] max-w-[21.875em]">{plan.description}</p>

      <div
        id={`plan-${plan.id}-price`}
        className="flex flex-row items-center justify-center p-4 mb-6 bg-[var(--midnight-90)] rounded-[0.25em] min-h-[4.875em] max-h-[4.875em]"
        aria-label={`Price: ${priceDisplay}`}
      >
        <div className={price === "Flexible pricing" ? "headline-05" : "headline-03"}>{price}</div>
        {price !== "Flexible pricing" && (
          <div className="headline-05 text-[var(--midnight-50)] mt-[1em]" aria-hidden="true">{period}</div>
        )}
      </div>

      {plan.id !== "free" && (
        <p className="caption text-[var(--midnight-50)]" aria-label={`Includes everything from ${plan.id} plan, plus:`}>
          Includes everything from {plan.id}, plus:
        </p>
      )}

      <ul
        id={`plan-${plan.id}-features`}
        className="flex flex-col gap-1 mb-6 list-none pl-0"
        aria-label="Plan features"
      >
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-[var(--midnight-50)] flex-shrink-0 mt-2" aria-hidden="true" />
            <span className="caption text-[var(--midnight-50)]">{feature.text}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        {plan.buttonVariant === "primary" ? (
          <Button
            href={plan.href}
            variant={plan.buttonVariant}
            className="hover:!bg-[var(--midnight-90)] hover:!border-[var(--midnight-90)] transition-colors"
            style={{ width: "100%", backgroundColor: "var(--midnight-90)", borderColor: "var(--midnight-90)", color: "#fff" }}
            aria-label={`${plan.buttonText} for ${plan.title} plan`}
          >
            {plan.buttonText}
          </Button>
        ) : (
          <Button
            href={plan.href}
            variant={plan.buttonVariant}
            className="!text-[var(--midnight-70)] !border-[var(--midnight-70)] hover:!text-white hover:!border-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            style={{ width: "100%" }}
            aria-label={`${plan.buttonText} for ${plan.title} plan`}
          >
            {plan.buttonText}
          </Button>
        )}
      </div>
    </article>
  );
}


export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <main className="min-h-screen bg-[var(--midnight)] text-white">
      <Container className="py-[3.5em]">
        {/* Header */}
        <header className="flex flex-col gap-[0.4375em] mt-[6.25em]">
          <h1 className="headline-05 md:hidden text-white max-w-[22.6875em]">
            Plans built for all types of electronic<br />
            music professionals
          </h1>
          <h1 className="hidden md:block headline-03 text-white max-w-[37.5em]">
            Plans built for all types of electronic<br />
            music professionals
          </h1>
        </header>

        <section aria-label="Billing options" className="mt-8">
          <div className="flex justify-end mb-8">
            <BillingToggle value={billingCycle} onChange={setBillingCycle} />
          </div>
        </section>

        {/* Pricing Cards */}
        <section aria-label="Pricing plans" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1em] mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} billingCycle={billingCycle} />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

