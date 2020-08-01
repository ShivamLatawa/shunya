import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';


export const CustomDatePicker = ({show, setDateInInput, setShow}) => {
    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setDateInInput(currentDate);
        setShow(false);
    };

    return (
        <>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
                />
            )}
        </>
    );
};

export default CustomDatePicker;
