export default function AdminLogin(){

    function onLogin(e){
        e.preventDefault();
    }

    return (
        <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
            <form onSubmit={onLogin}>
                <h4 className="text-2xl font-bold mb-4">Admin Panel</h4>
                <div className="mb-3 min-w-72">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" id="email" required  placeholder="your@email.com"/>
                </div>
                <div className="mb-3 min-w-72">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input type="password" className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" id="password" required  placeholder="Enter your password"/>
                </div>
                <button className="bg-black text-white rounded-sm py-1 px-5 w-full">Login</button>
            </form>
        </div>
    )
}