export function FeaturesSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold">What Is Tokenizer360?</h2>
        <p className="mb-8 text-center text-lg text-muted-foreground">
          Tokenizer360 merges sophisticated AI trading technology with an interactive copy trading environment, empowering
          you to:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-semibold">Leverage AI Algorithms</h3>
            <p className="text-muted-foreground">
              Use state-of-the-art AI to automate trading decisions and optimize your portfolio.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-semibold">Copy the strategies of successful traders</h3>
            <p className="text-muted-foreground">Follow and replicate trades from proven successful traders.</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-semibold">Unified Account Dashboard</h3>
            <p className="text-muted-foreground">
              Manage all your trades and accounts from one comprehensive interface.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-semibold">Master Any Market</h3>
            <p className="text-muted-foreground">
              Access a suite of powerful tools tailored to handle diverse market conditions effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

