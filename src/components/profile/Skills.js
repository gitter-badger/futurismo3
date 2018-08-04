import React from 'react'
import { FaJs, FaDatabase, FaRobot, FaChartBar } from 'react-icons/fa'
import SkillList from './SkillList'
import MoreButton from './MoreButton'

const SkillsPage = () => (
  <section id="skills" className="main style1 special">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>Skills</h2>
        </header>
        <p>低レイヤから高レイヤまで、なんでもこなします。</p>
      </div>
      <SkillList
        img={<FaDatabase size={100} />}
        title="Webバックエンド"
        description="仕事としてJavaによるバックエンド開発の経験があります。RailsのWebサービスも構築できます。"
      />
      <SkillList
        img={<FaJs size={100} />}
        title="Webフロントエンド"
        description="このポートフォリオサイトをReactを利用して作成しました。"
      />
      <SkillList
        img={<FaRobot size={100} />}
        title="IoT・組込み"
        description="新卒で組込み専門会社に入社し、エンジニアとしてのキャリアを積んできました。"
      />
      <SkillList
        img={<FaChartBar size={100} />}
        title="AI・データサイエンス"
        description="MOOCやデータサイエンスのコンペを利用してデータ解析の技術を磨いてきました。"
      />
      <div className="col-12">
        <MoreButton url="/profile/skills" />
      </div>
    </div>
  </section>
)

export default SkillsPage
