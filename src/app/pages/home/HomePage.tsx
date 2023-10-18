import {useAuth} from "react-oidc-context";

export const PATH_HOME_PAGE = "/home";

export default function HomePage() {
    const auth = useAuth();
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <h1>Access Token</h1>
                <textarea
                    style={{ height: "100px", width: "100%", display: "block" }}
                    value={auth.user?.access_token}
                />
            </div>
            <div>
                <h1>Refresh Token</h1>
                <textarea
                    style={{ height: "100px", width: "100%", display: "block" }}
                    value={auth.user?.refresh_token}
                />
            </div>
            <div>
                <h1>User Id</h1>
                <textarea
                    style={{ height: "100px", width: "100%", display: "block" }}
                    value={auth.user?.profile.sub}
                />
            </div>
        </div>
    )
}