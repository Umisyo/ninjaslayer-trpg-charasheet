'use client'

import {ChangeEvent, FormEvent, useState} from "react";
import {Input} from "~/app/components/ui/input";
import {Label} from "~/app/components/ui/label";
import {Ninja} from "~/types/ninja";
import {Button} from "~/app/components/ui/button";

export default function Home() {
  const initialNinjaState: Ninja = {
    name: '',
    type: '',
    karate: 0,
    karateGrowValue: 0,
    neuron: 0,
    neuronGrowValue: 0,
    wazamae: 0,
    wazamaeGrowValue: 0,
    jitsu: 0,
    jitsuGrowValue: 0,
    initiative: 0,
    hpChangeValue: 0,
    mentalChangeValue: 0,
    legStrengthChangeValue: 0,
    dkk: 0,
    assets: 0,
    fame: 0,
    jitsuSkills: [],
    default_skill: '',
    skills: [],
    items: [],
    knowledge_skills: [],
    cybernetics: [],
    attackChangeValue: 0,
    shootingChangeValue: 0,
    pilotChangeValue: 0,
    brainChangeValue: 0,
    evasionChangeValue: 0,
    precisionChangeValue: 0,
    rolloverChangeValue: 0,
    activationChangeValue: 0,
    quickResponseChangeValue: 0,
    emergencyEvasionChangeValue: 0
  }

  const [ninja, setNinja] = useState<Ninja>(initialNinjaState)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {name, value, type} = e.target;
    console.log(value)

    // typeがnumberの場合、値を数値に変換する
    const formattedValue = type === 'number' ? Number(value) : value;

    setNinja((prevState) => ({
      ...prevState,
      [name]: formattedValue,
    }));
  };

  const createRandomStatus = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setNinja((prevState) => ({
      ...prevState,
      karate: Math.floor(Math.random() * 6) + 1,
      neuron: Math.floor(Math.random() * 6) + 1,
      wazamae: Math.floor(Math.random() * 6) + 1,
      jitsu: Math.floor(Math.random() * 6) + 1,
    }));
  }

  return (
    <main className="container">
      <form className="w-full">
        <div className="w-4/5 mx-auto">
          <div>
            <h2 className='text-2xl'>人物設定</h2>
            <Label>名前</Label>
            <Input type="text" name="name" placeholder="フジキド ケンジ" value={ninja.name} onChange={handleInputChange}/>
            <Label>種別</Label>
            <Input type="text" name="type" placeholder="ニンジャ" value={ninja.type} onChange={handleInputChange}/>
          </div>
          <div className="sm:grid block grid-cols-2 gap-2 mt-3">
            <div className="p-2 border border-solid border-gray-600">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl">基礎能力値</h2>
                <Button onClick={createRandomStatus} type="button">ランダム</Button>
              </div>
              <div className="grid grid-cols-4 items-center">
                <p>ステータス</p>
                <p>初期値</p>
                <p>成長</p>
                <p>合計</p>
              </div>
              <div className="grid grid-cols-4 items-center">
                <Label>カラテ</Label>
                <Input type="number" name="karate" placeholder="0" min={0} max={6} value={ninja.karate} onChange={handleInputChange}/>
                <Input type="number" name="karateGrowValue" placeholder="0" value={ninja.karateGrowValue}
                       onChange={handleInputChange}/>
                <p>{ninja.karate + ninja.karateGrowValue}</p>
              </div>
              <div className="grid grid-cols-4 items-center">
                <Label>ニューロン</Label>
                <Input type="number" name="neuron" placeholder="0" min={0} max={6} value={ninja.neuron} onChange={handleInputChange}/>
                <Input type="number" name="neuronGrowValue" placeholder="0" value={ninja.neuronGrowValue}
                       onChange={handleInputChange}/>
                <p>{ninja.neuron + ninja.neuronGrowValue}</p>
              </div>
              <div className="grid grid-cols-4 items-center">
                <Label>ワザマエ</Label>
                <Input type="number" name="wazamae" value={ninja.wazamae} placeholder="0" min={0} max={6}  onChange={handleInputChange}/>
                <Input type="number" name="wazamaeGrowValue" value={ninja.wazamaeGrowValue} placeholder="0"
                       onChange={handleInputChange}/>
                <p>{ninja.wazamae + ninja.neuronGrowValue}</p>
              </div>
              <div className="grid grid-cols-4 items-center">
                <Label>ジツ</Label>
                <Input type="number" name="jitsu" value={ninja.jitsu} placeholder="0" min={0} max={6} onChange={handleInputChange}/>
                <Input type="number" name="jitsuGrowValue" value={ninja.jitsuGrowValue} placeholder="0"
                       onChange={handleInputChange}/>
                <p>{ninja.jitsu + ninja.jitsuGrowValue}</p>
              </div>
            </div>
            <div className="p-2 border border-solid border-gray-600">
              <h2 className="text-2xl">副次能力値</h2>
              <div className="grid grid-cols-4 items-center">
                <p>ステータス</p>
                <p>初期値</p>
                <p>修正値</p>
                <p>合計</p>
              </div>
              <div className="grid grid-cols-4 items-center">
                <Label>体力</Label>
                <p>{ninja.karate + ninja.karateGrowValue}</p>
                <Input type="number" name="hpChangeValue" placeholder="0" value={ninja.hpChangeValue}
                       onChange={handleInputChange}/>
                <p>{ninja.karate + ninja.karateGrowValue + ninja.hpChangeValue}</p>
              </div>
              <div className="grid grid-cols-4 items-center">
                <Label>精神力</Label>
                <p>{ninja.neuron + ninja.neuronGrowValue}</p>
                <Input type="number" name="mentalChangeValue" placeholder="0" value={ninja.mentalChangeValue}
                       onChange={handleInputChange}/>
                <p>{ninja.neuron + ninja.neuronGrowValue + ninja.mentalChangeValue}</p>
              </div>
              <div className="grid grid-cols-4 items-center">
                <Label>脚力</Label>
                {/*{カラテまたはニューロンの大きい方の半分を初期値とする}*/}
                <p>{Math.ceil(Math.max((ninja.karate + ninja.karateGrowValue) / 2, (ninja.wazamae + ninja.wazamaeGrowValue) / 2))}</p>
                <Input type="number" name="legStrengthChangeValue" placeholder="0" value={ninja.legStrengthChangeValue}
                       onChange={handleInputChange}/>
                <p>{Math.ceil(Math.max((ninja.karate + ninja.karateGrowValue) / 2, (ninja.wazamae + ninja.wazamaeGrowValue) / 2)) + ninja.legStrengthChangeValue}</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  )
}