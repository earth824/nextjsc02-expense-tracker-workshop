export default function TransactionLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto py-4 min-h-full">
      <h1 className="text-2xl text-muted-foreground font-semibold">
        Transaction
      </h1>
      {children}
    </div>
  );
}
