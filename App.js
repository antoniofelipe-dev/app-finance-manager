import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [expense, setExpense] = useState('');
  const [expenses, setExpenses] = useState([]);
  /* const [theme, setTheme] = useState('light'); */ 

  const addExpense = () => {
    if (expense) {
      setExpenses([...expenses, parseFloat(expense)]);
      setExpense('');
    }
  };

  const calculateTotal = () => {
    const total = expenses.reduce((accumulator, current) => accumulator + current, 0);
    alert(`Total de gastos: R$ ${total.toFixed(2)}`);
  };

  const resetExpenses = () => {
    setExpenses([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciador de Gastos</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o seu gasto"
        value={expense}
        onChangeText={(text) => setExpense(text)}
        keyboardType="numeric"
      />
      <Button title="Adicionar Gasto" onPress={addExpense} />
      <View style={styles.buttonsContainer}>
        <Button title="Somar Gastos" onPress={calculateTotal} />
        <Button title="Zerar Gastos" onPress={resetExpenses} />
      </View>
      <FlatList
        style={styles.expenseList}
        data={expenses}
        renderItem={({ item }) => <Text style={styles.expenseItem}>{item.toFixed(2)}</Text>}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 40,
    marginTop: 100
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  expenseList: {
    marginTop: 20,
  },
  expenseItem: {
    marginBottom: 10,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
