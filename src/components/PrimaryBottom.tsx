import { Pressable, Text } from "react-native"
import { globalStyles } from "../theme/theme"

interface Props {
    onPress: () => void;
    label: string;
    color?: string;
    textColor?: string;
    border?: boolean;
}


export const PrimaryBottom = ({onPress, label, color, textColor, border}:Props) => {
  return (
    
    <Pressable 
        style={ [globalStyles.primatyButtom, 
            {
                backgroundColor: color,
                borderWidth: border ? 2 : 0,
                borderColor: border ? textColor : 'transparent'
            }
        ]}
        onPress={() => {}} > 
        <Text style={{ color: textColor }}> {label} </Text>  
    </Pressable>

  )
}