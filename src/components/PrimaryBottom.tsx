import { Pressable, StyleSheet, Text } from "react-native"

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
        style={ [styles.primatyButtom,
            {
                backgroundColor: color,
                borderWidth: border ? 2 : 0,
                borderColor: border ? textColor : 'transparent'
            }
        ]}
        onPress={ onPress } > 
        <Text style={{ color: textColor }}> {label} </Text>  
    </Pressable>

  )
}


const styles = StyleSheet.create({

    primatyButtom: {
        borderRadius: 30,
        height: 60,
        alignItems: 'center',
        padding: 20,
    },

})