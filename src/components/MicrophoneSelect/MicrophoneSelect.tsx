import React from 'react';
import { Select } from "@chakra-ui/react";

type MicrophoneSelectType = {
    microphoneList: InputDeviceInfo[];
    setMicrophone: (groupId: string) => void;
    selectedMicrophone?: InputDeviceInfo;
}

const MicrophoneSelect = ({microphoneList, setMicrophone, selectedMicrophone}: MicrophoneSelectType) => {
    return (
        <Select placeholder="Select Microphone" defaultValue={selectedMicrophone?.groupId || microphoneList[0].groupId} onChange={(e) => setMicrophone(e.target.value)} >
            {microphoneList.map(microphone => {
                return (
                    <option 
                        value={microphone.groupId} 
                        key={microphone.groupId}
                    >
                        {microphone.label}
                    </option>
                )})}
        </Select>
    )
}

export default MicrophoneSelect;