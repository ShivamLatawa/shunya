import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

export const CustomDatePicker = ({style, show}) => {
    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
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
