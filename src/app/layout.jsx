import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../state";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalLoader from "@/components/GlobalLoader";
import { useGlobalLoader } from "@/hooks";

const queryClient = new QueryClient();

export default function RootLayout() {
    return (
        <Suspense fallback={<GlobalLoader force />}>
            <QueryClientProvider client={queryClient}>
                <PersistGate
                    loading={<GlobalLoader force />}
                    persistor={persistor}
                >
                    <div className="bg-dark">
                        <Outlet />
                    </div>
                    <GlobalLoader />
                </PersistGate>
            </QueryClientProvider>
        </Suspense>
    );
}
