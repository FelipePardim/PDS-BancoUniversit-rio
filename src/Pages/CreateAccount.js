import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Picker,
    Switch,
    Slider,
} from "react-native";

import bank from "../../assets/bank.png";

export function CreateAccount() {
    const [selectedValue, setSelectedValue] = useState("masculino");

    const [isEnabled, setIsEnabled] = useState(false);
    const [accountLimit, setAccountLimit] = useState(250);

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
        <View style={styles.container}>
            <Image source={bank} style={styles.image} />
            <Text style={styles.bankTitle}>Banco Universitário</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.textLabel}>Nome:</Text>
                <TextInput
                    placeholder="Digite seu nome:"
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.textLabel}>Idade:</Text>
                <TextInput
                    placeholder="Digite sua idade:"
                    keyboardType="numeric"
                    style={styles.input}
                ></TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.textLabel}>Sexo:</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(itemValue)
                    }
                >
                    <Picker.Item label="Masculino" value="masculino" />
                    <Picker.Item label="Feminino" value="feminino" />
                </Picker>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.textLabel}>Estudante:</Text>
                <Switch
                    style={styles.switch}
                    trackColor={{ false: "grey", true: "#925908" }}
                    thumbColor={isEnabled ? "orange" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <Text style={styles.textLabel}>
                Seu Limite:
                <Text style={styles.accountLimit}>
                    {`R$ ` +
                        parseFloat(accountLimit).toFixed(2).replace(".", ",")}
                </Text>
            </Text>
            <Slider
                style={styles.slider}
                step={1}
                minimumValue={250}
                maximumValue={1500}
                minimumTrackTintColor="orange"
                maximumTrackTintColor="green"
                onValueChange={(value) => setAccountLimit(value)}
                thumbTintColor={"orange"}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Abrir Conta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        margin: 25,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "80%",
        marginTop: 5,
    },
    input: {
        width: "100%",
        borderColor: "orange",
        borderWidth: 2,
        borderRadius: 25,
        lineHeight: 15,
        paddingHorizontal: 15,
    },
    picker: {
        width: "60%",
        margin: 10,
    },
    switch: {
        alignSelf: "stretch",
    },
    button: {
        backgroundColor: "orange",
        width: 280,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderColor: "#E3B781",
        borderWidth: 2,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF",
    },
    slider: {
        width: 280,
        height: 60,
        alignSelf: "center",
    },
    image: {
        width: 130,
        height: 130,
        alignSelf: "center",
        marginVertical: 5,
    },
    accountLimit: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#568965",
    },
    textLabel: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 5,
    },
    bankTitle: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
    },
});
