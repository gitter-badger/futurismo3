import React from 'react'
import SkillList from './SkillList'
import MoreButton from './MoreButton'

const SkillsPage = ({ fixed }) => (
  <section id="three" className="main style1 special">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>Skills</h2>
        </header>
        <p>低レイヤからフロントエンドまでこなすオールアラウンダー</p>
      </div>
      <SkillList
        img={fixed}
        title="Webバックエンド"
        description="仕事としてJavaによるバックエンド開発の経験があります。RailsのWebサービスも構築できます。"
      />
      <SkillList
        img={fixed}
        title="Webフロントエンド"
        description="このポートフォリオサイトをReactを利用して作成しました。"
      />
      <SkillList
        img={fixed}
        title="IoT・組込み"
        description="新卒で組込み専門会社に入社し、エンジニアとしてのキャリアを積んできました。"
      />
      <SkillList
        img={fixed}
        title="AI・データサイエンス"
        description="MOOCやデータサイエンスのコンペを利用してデータ解析の技術を磨いてきました。"
      />
      <div className="col-12">
        <MoreButton url="#" />
      </div>
    </div>
  </section>
)

export default SkillsPage
