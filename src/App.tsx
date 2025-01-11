import { useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import Nav from './component/Nav';
import { useSystemTheme } from './hooks/useSystemTheme';
import { Container, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import './App.css';

function App() {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');
  const prefersDarkMode = useSystemTheme();

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke('greet', { name }));
  }

  return (
    <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
      <Container className="container">
        <form
          className="row"
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button>Greet</button>
        </form>
        <p>{greetMsg}</p>

        <p>
          想象一下，站在铁路站台上，看着手推车经过。一个女孩在手推车上掉了一个鲜红的球。对她来说，球径直地掉下来。但从平台上，你会看到球在撞上手推车地板之前穿过一个弧线。你们俩观察同一事件，但来自不同的参考框架：一个锚定在手推车上，另一个锚定在平台上。
          参考系的概念在经典物理学中有着悠久的历史：艾萨克·牛顿、伽利略和阿尔伯特·爱因斯坦都依靠它们来研究运动。参考系本质上是一个坐标系（一种指定相对于某个零点或“起源”）的位置和时间的方法，它本身可能正在运动。爱因斯坦使用参考系来发展他的相对论，该理论揭示了空间和时间不是宇宙的固定背景，而是可以拉伸、挤压和扭曲的弹性实体。
          但量子物理学大多忽略了参考框架。爱丽丝和鲍勃是许多量子物理学实验中的虚构观察者，通常有不同的物理位置，但人们假定他们有一个共同的参考框架。这现在正在改变。量子物理学家正在意识到，他们不能忽视这样一个事实，即爱丽丝锚定的参考框架（与手推车或平台一起）可能同时有多个可能的位置。或者Bob用来测量时间的时钟可能受到量子不确定性的影响。
          瑞士苏黎世联邦理工学院的理论物理学家雷纳托·雷纳（打开一个新标签）说：“在量子世界中，参考系[也]应该用量子理论的形式主义来描述。”
          在今年的一篇论文（打开一个新标签）中，量子光学和量子信息研究所和维也纳大学的物理学家Časlav
          Brukner（打开一个新标签）和同事表明，量子参考系对叠加和纠缠等长期研究的量子现象提出了新的视角。这些发现导致Renner怀疑量子参考框架可能有助于解决量子思想实验中出现的一些奇怪的悖论。
          更雄心勃勃的是，布鲁克纳和同事们希望通过量子参考系的逻辑思考可能会产生关于量子引力的新见解——这是一个试图将引力带入与其他基本力相同的理论框架的研究项目。
          Renner说，随着对量子参考框架的新进出，“我们只是非常大的事情的开始。”
          模糊的位置
          量子参考系的概念于1984年首次引入（打开一个新选项卡），但多个团体在2019年左右恢复了这个想法（打开一个新选项卡），引发了最近研究的激增。这些论点挑战我们改变我们对两种典型的量子属性的思考方式：叠加，即一个物体可以同时处于多种可能的状态，以及纠缠，即不同的粒子共享一个量子状态，这样测量其中一个粒子就会立即确定另一个粒子的状态，无论它们之间的距离如何。
        </p>
      </Container>
      <Nav />
    </ThemeProvider>
  );
}

export default App;
