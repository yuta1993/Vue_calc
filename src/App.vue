<template>
  <!-- Vue。.jsの記述 -->
  <div id="app">
    <div class="calculator">
      <div class="display">{{ displayValue }}</div>
      <!-- Vue。.jsの記述>>>{{}} -->
      <div class="buttons">
        <button @click="appendNumber('7')">7</button
        ><!-- Vue。.jsの記述>>>@click -->
        <button @click="appendNumber('8')">8</button>
        <button @click="appendNumber('9')">9</button>
        <button @click="setOperation('/')">/</button>

        <button @click="appendNumber('4')">4</button>
        <button @click="appendNumber('5')">5</button>
        <button @click="appendNumber('6')">6</button>
        <button @click="setOperation('*')">*</button>

        <button @click="appendNumber('1')">1</button>
        <button @click="appendNumber('2')">2</button>
        <button @click="appendNumber('3')">3</button>
        <button @click="setOperation('-')">-</button>

        <button @click="appendNumber('0')">0</button>
        <button @click="clear">C</button>
        <button @click="calculate">=</button>
        <button @click="setOperation('+')">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Vue。.jsの記述
  name: "App", //任意につけて良いが２単語以上の組み合わせにしないとエラーが発生する。（Appは仕様上OK）
  data() {
    // Vue。.jsの記述
    return {
      displayValue: "",
      currentOperation: null,
      previousValue: null,
    };
  },
  methods: {
    // Vue。.jsの記述
    appendNumber(number) {
      // 数字が追加されると表示値に加えられる
      this.displayValue += number;
    },
    setOperation(operation) {
      // 現在の演算子が設定されている場合、計算を実行する
      if (this.currentOperation !== null && this.displayValue !== "") {
        this.calculate();
      }
      // 現在の表示値を保存し、新しい演算子を設定する
      this.previousValue = this.displayValue;
      this.currentOperation = operation;
      this.displayValue = ""; // 次の値の入力を待つため、表示をリセット
    },
    clear() {
      // すべての値をリセットする
      this.displayValue = "";
      this.currentOperation = null;
      this.previousValue = null;
    },
    calculate() {
      // 演算子が設定されているか、表示値が空でないかを確認する
      if (this.currentOperation === null || this.displayValue === "") {
        return;
      }
      const current = parseFloat(this.displayValue);
      const previous = parseFloat(this.previousValue);
      let result;
      // 現在の演算子に応じた計算を行う
      switch (this.currentOperation) {
        case "+":
          result = previous + current;
          break;
        case "-":
          result = previous - current;
          break;
        case "*":
          result = previous * current;
          break;
        case "/":
          result = previous / current;
          break;
      }
      // 結果を表示値に設定し、演算子と前の値をリセットする
      this.displayValue = result.toString();
      this.currentOperation = null;
      this.previousValue = null;
    },
  },
};
</script>
