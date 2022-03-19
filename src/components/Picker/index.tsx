import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import { IPicker } from './types';
import styles from './styles';

const Picker = ({ options, value, setValue }: IPicker) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <View>
            <TouchableOpacity onPress={() => setOpen(!isOpen)} style={[styles.buttonPicker, styles.buttonPickerClosed, isOpen && styles.buttonPickerOpen]}>
                <Text style={styles.textSelected}>{options.find((option) => option.value === value)?.label}</Text>
                <Ionicons name={`chevron-${isOpen ? 'up' : 'down'}`} size={20} />
            </TouchableOpacity>
            {
                !!options.length && isOpen &&
                <View style={styles.viewPickerOptions}>
                    {
                        options.map((option, index) => (
                            <TouchableOpacity key={option.value} onPress={() => {
                                setValue(option.value);
                                setOpen(false);
                            }} style={[styles.buttonPicker, styles.buttonPickerOption, index === options.length - 1 && styles.buttonPickerOptionLast]}>
                                <Text style={styles.textSelected}>{option.label}</Text>
                                {value === option.value && <Ionicons name='checkmark' size={20} />}
                            </TouchableOpacity>
                        ))
                    }
                </View>
            }
        </View>
    )
};

export default Picker;