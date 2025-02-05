import EMICalculator from "./EmiCalculator";
import { Helmet } from "react-helmet";
import { lazy, Suspense } from "react";



function App() {
  const EMICalculator = lazy(() => import('./EmiCalculator'));
  return (
    <>
    <Helmet>
      <title>EMI Calculator - Easy Loan EMI Calculation</title>
      <link rel="canonical" href="https://emi-calculator-irk.vercel.app/" />
      <meta name="description" content="Calculate your loan EMI easily using our EMI calculator. Plan your finances better with accurate monthly installment calculations." />
      <meta name="keywords" content="EMI Calculator, Loan EMI, Financial Planning" />
      <meta property="og:title" content="EMI Calculator - Easy Loan EMI Calculation" />
      <meta property="og:description" content="Calculate your loan EMI easily using our EMI calculator." />
      <meta property="og:url" content="https://emi-calculator-irk.vercel.app/" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "EMI Calculator",
        "description": "Calculate your loan EMI easily using our EMI calculator. Plan your finances better with accurate monthly installment calculations.",
        "url": "https://emi-calculator-irk.vercel.app/",
        "mainEntityOfPage": "https://emi-calculator-irk.vercel.app/"
      }
    `}
  </script>
    </Helmet>
    <Suspense fallback={<div>Loading...</div>}>
      <EMICalculator />
    </Suspense>
    </>
  );
}

export default App;
