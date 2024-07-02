import React, { useEffect } from "react";
import Textarea from "@/components/TextArea";
import { useMasters, useProfile } from "@/state";
import { useGlobalLoader } from "@/hooks";
import { range } from "@/utils";
import { useNavigate } from "react-router-dom";
import { CMIcon, KGIcon } from "@/components/icons/solid";
import HeadlessInput from "@/components/common/Input/HeadlessInput";
import SelectOption from "@/components/SelectOption";
// import Input from "@/components/common/Input/Input";
// import Select from "@/components/common/Input/Select";

const Step2 = ({ addOnSkip, removeOnSkip }) => {
    const { masters, load, loading } = useMasters();
    const { data, setData, formIds, loader } = useProfile();

    const navigate = useNavigate();

    useGlobalLoader(loading || loader);

    useEffect(load, []);

    useEffect(() => {
        const i = addOnSkip(() => {
            navigate("/advertiser/choose-plans");
        });

        return () => {
            removeOnSkip(i);
        };
    }, []);

    return (
        <div className="flex-grow px-2 py-6 text-white">
            <Textarea
                rows={4}
                placeholder="Description*"
                className="p-4"
                id={formIds.about}
                value={data.about}
                onChange={v => setData({ about: v })}
            />
            <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-4 [&>*]:min-h-[58px]">
                <SelectOption
                    id={formIds.age}
                    value={data.age}
                    onChange={e => {
                        setData({
                            age: e.target.value,
                        });
                    }}
                    options={range(18, 101)?.map(age => ({
                        id: age,
                        value: age,
                        label: age,
                    }))}
                    firstDisabledOption="Age"
                />
                <HeadlessInput
                    type="number"
                    placeholder="Height"
                    id={formIds.height}
                    value={data.height}
                    onChange={e => setData({ height: e.target.value })}
                    position
                    icon={CMIcon}
                />
                <HeadlessInput
                    type="number"
                    placeholder="Weight"
                    id={formIds.weight}
                    value={data.weight}
                    onChange={e => setData({ weight: e.target.value })}
                    position
                    icon={KGIcon}
                />
                <HeadlessInput
                    type="number"
                    placeholder="Cock Size"
                    id={formIds.cock_size}
                    value={data.cock_size}
                    onChange={e => setData({ cock_size: e.target.value })}
                    position
                    icon={CMIcon}
                />
                <SelectOption
                    id={formIds.sexual_orientation}
                    value={data.sexual_orientation}
                    onChange={e =>
                        setData({ sexual_orientation: e.target.value })
                    }
                    options={masters.sexual_orientation.map(master => ({
                        id: master.id,
                        value: master.id,
                        label: master.value,
                    }))}
                    firstDisabledOption="Sexual Orientation"
                />
                <SelectOption
                    id={formIds.position}
                    value={data.position}
                    onChange={e => setData({ position: e.target.value })}
                    options={masters.position.map(master => ({
                        id: master.id,
                        value: master.id,
                        label: master.value,
                    }))}
                    firstDisabledOption="Position"
                />
                <SelectOption
                    id={formIds.foreskin}
                    value={data.foreskin}
                    onChange={e => setData({ foreskin: e.target.value })}
                    options={masters.foreskin.map(master => ({
                        id: master.id,
                        value: master.id,
                        label: master.value,
                    }))}
                    firstDisabledOption="Foreskin"
                />
                <SelectOption
                    id={formIds.safe}
                    value={data.safe}
                    onChange={e => setData({ safe: e.target.value })}
                    options={masters.safe.map(master => ({
                        id: master.id,
                        value: master.id,
                        label: master.value,
                    }))}
                    firstDisabledOption="Safe/BB"
                />
                <SelectOption
                    id={formIds.body_hair}
                    value={data.body_hair}
                    onChange={e => setData({ body_hair: e.target.value })}
                    options={masters.body_hair.map(master => ({
                        id: master.id,
                        value: master.id,
                        label: master.value,
                    }))}
                    firstDisabledOption="Body Hair"
                />
                <SelectOption
                    id={formIds.hair_color}
                    value={data.hair_color}
                    onChange={e => setData({ hair_color: e.target.value })}
                    options={masters.hair_color.map(master => ({
                        id: master.id,
                        value: master.id,
                        label: master.value,
                    }))}
                    firstDisabledOption="Hair Color"
                />
                <SelectOption
                    id={formIds.eye_color}
                    value={data.eye_color}
                    onChange={e => setData({ eye_color: e.target.value })}
                    options={masters.eyes_color.map(master => ({
                        id: master.id,
                        value: master.id,
                        label: master.value,
                    }))}
                    firstDisabledOption="Eye Color"
                />
                <SelectOption
                    id={formIds.style}
                    value={data.style}
                    onChange={e => setData({ style: e.target.value })}
                    options={masters.style.map(master => ({
                        id: master.id,
                        value: master.id,
                        label: master.value,
                    }))}
                    firstDisabledOption="Style"
                />
            </div>
        </div>
    );
};

export default Step2;
