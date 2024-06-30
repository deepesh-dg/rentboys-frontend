import React, { useEffect } from "react";
import Input from "@/components/common/Input/Input";
import Select from "@/components/common/Input/Select";
import { useMasters, useProfile } from "@/state";
import { useGlobalLoader } from "@/hooks";
import { useNavigate } from "react-router-dom";

const Step3 = ({ addOnSkip, addOnNext, removeOnSkip, removeOnNext }) => {
    const { data, setData, formIds, loader, profileSetup } = useProfile();
    const { masters, load, loading } = useMasters();
    const navigate = useNavigate();

    useEffect(load, []);

    useEffect(() => {
        const i = addOnSkip(() => {
            navigate("/advertiser/choose-plans");
        });
        const j = addOnNext(async () => {
            const status = await profileSetup();
            if (status) navigate("/advertiser/choose-plans");

            return status;
        });

        return () => {
            removeOnSkip(i);
            removeOnNext(j);
        };
    }, [profileSetup]);

    useGlobalLoader(loading || loader);

    return (
        <div className="flex-grow px-4">
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-4 [&>*]:min-h-[58px]">
                <Select
                    id={formIds.body}
                    value={data.body}
                    onChange={e => setData({ body: e.target.value })}
                    options={masters.body.map(master => ({
                        id: master.id,
                        value: master.id,
                        label: master.value,
                    }))}
                    firstDisabledOption="Body"
                />
                <Select
                    id={formIds.race}
                    value={data.race}
                    onChange={e => setData({ race: e.target.value })}
                    options={masters.race.map(master => ({
                        id: master.id,
                        value: master.id,
                        label: master.value,
                    }))}
                    firstDisabledOption="Race"
                />
                <Select
                    id={formIds.tatoos}
                    value={data.tatoos}
                    onChange={e => setData({ tatoos: e.target.value })}
                    options={masters.tattoos?.map(master => ({
                        id: master.id,
                        value: master.id,
                        label: master.value,
                    }))}
                    firstDisabledOption="Tattoos"
                />
                <Select
                    id={formIds.piercing}
                    value={data.piercing}
                    onChange={e => setData({ piercing: e.target.value })}
                    options={masters.piercings?.map(master => ({
                        id: master.id,
                        value: master.id,
                        label: master.value,
                    }))}
                    firstDisabledOption="Piercing"
                />
                <Select
                    id={formIds.smoking}
                    value={data.smoking}
                    onChange={e => setData({ smoking: e.target.value })}
                    options={masters.smooking?.map(master => ({
                        id: master.id,
                        value: master.id,
                        label: master.value,
                    }))}
                    firstDisabledOption="Smoking"
                />
            </div>
            <h2 className="mt-6 text-xl font-bold text-white">
                Services Offering
            </h2>
            <div className="grid gap-4 pb-6 md:grid-cols-3">
                <div className="space-y-2">
                    <p>On Call</p>
                    <Input placeholder="price" />
                </div>
                <div className="space-y-2">
                    <p>Off Call</p>
                    <Input placeholder="price" />
                </div>
                <div className="space-y-2">
                    <p>Overnight</p>
                    <Input placeholder="price" />
                </div>
            </div>
        </div>
    );
};

export default Step3;
