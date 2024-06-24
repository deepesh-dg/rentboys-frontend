import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import CustomLoader from "../lib/loader";
import { Provider } from "react-redux";
import Boot from "@/components/boot";
import store from "@/state";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../state";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
    return (
        <Suspense fallback={<CustomLoader />}>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <PersistGate
                        loading={<CustomLoader />}
                        persistor={persistor}
                    >
                        <Boot />
                        <div className="bg-dark">
                            <Outlet />
                        </div>
                    </PersistGate>
                </Provider>
            </QueryClientProvider>
        </Suspense>
    );
}
