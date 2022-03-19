import { IOption } from "../components/Picker/types";

export const COLORS = {
    default: '#f2f2f2',
    white: '#FFFFFF',
    green01: '#3CC6AA',
    green02: '#1ABC9C',
    green03: '#2AB598',
    yellow01: '#FDA506',
    yellow02: '#FFA900',
    gray01: '#0000000F',
    gray02: '#00000029',
    gray03: '#868686',
    gray04: '#535353',
    gray05: '#E1E1E1',
    gray06: '#666666',
}

export const CUSTOM_FONTS_LOCATION = {
  'Roboto Regular': require('../assets/fonts/Roboto-Regular.ttf'),
  'Roboto Bold': require('../assets/fonts/Roboto-Bold.ttf'),
};

export const PICKER_OPTIONS: IOption[] = [
    { label: 'Padrão', value: 'DEFAULT' },
    { label: 'A-Z', value: 'ASC'  },
    { label: 'Z-A', value: 'DESC'  },
    { label: 'Mais visualizados', value: 'MORE_VIEWS'  },
    { label: 'Menos visualizados', value: 'LESS_VIEWS'  },
]