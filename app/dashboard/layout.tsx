interface propsDashboardLayout {
  children: React.ReactNode;
}

// Si el layout no cambia mucho se puede dejar con layout.tsx
// sino se cambia de layout a template.tsx

const DashboardLayout = async ({ children }: propsDashboardLayout) => {
  return (
    <div>
      <div className="bg-slate-900 text-white p-4">
        <h1 className="text-2xl">NavBar</h1>
      </div>
      {children}
    </div>
  );
};
export default DashboardLayout;
