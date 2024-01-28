const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-slate-500  h-screen">
            {children}
        </div>
    )
}

export default AuthLayout