import React from 'react'
import ExternalLink from '../components/external-link'

export const problems = [
  {
    type: '高齢化',
    text:
      '日本政府の推計によると、40年後の日本(2059年)では、65歳以上の人口は今(2019年)と比べてどうなるでしょう？',
    short: '将来の高齢者人口',
    choices: {
      a: '今とあまり変わらない',
      b: '今と比べて20%ほど増える',
      c: '今と比べて40%ほど増える'
    },
    explanation: (
      <>
        国立社会保障・人口問題研究所が作成した「
        <ExternalLink href="http://www.ipss.go.jp/pp-zenkoku/j/zenkoku2017/pp29_Report3.pdf">
          日本の将来推計人口(2017年版・執筆時最新)
        </ExternalLink>
        」の死亡中位・出生中位推計によると、2019年の65歳以上人口は
        <strong>約3592万人</strong>で、2059年は<strong>約3571万人</strong>
        。つまり今とほとんど変わらない。ピークの2042年(約3935万人)でも今より10%多いくらいだ。
      </>
    ),
    factfulness: (
      <>
        『ファクトフルネス』の第3章では、何かの数が直線的に増えるという思い込み「
        <strong>直線本能</strong>
        」について書かれている。高齢者の数は2040年後半には減少していく。このままひたすら直線的に増え続けることはない。
      </>
    ),
    trust: (
      <>
        人口予測はかなり正確だが、この問題はさらに予測しやすい。2059年の65歳以上人口は、2019年の25歳以上人口とその死亡率が基になるからだ。転入数・転出数(移民など)も影響するが、700万人近い誤差がでないと「今と比べて20%ほど増える」にならない。ちなみにここで取り上げているのは死亡中位・出生中位という最も現実的なシナリオでの推計。
      </>
    ),
    answer: 'a'
  },
  {
    type: '高齢者の交通事故',
    text:
      '日本において、65歳以上の人口当たり交通事故死者数は、2008年〜2017年の10年間でどのように変化したでしょう？',
    short: '高齢者の交通事故死',
    choices: {
      a: '以前と比べて33%ほど減った',
      b: '以前とあまり変わっていない',
      c: '以前と比べて33%ほど増えた'
    },
    explanation: (
      <>
        「
        <ExternalLink href="https://www.npa.go.jp/hakusyo/h30/honbun/html/u5110000.html">
          警察白書(2018年版・執筆時最新)
        </ExternalLink>
        」
        には、2008年〜2017年のあいだに「65歳以上の人口10万人当たり(交通事故)死者数は
        <strong>36.4％減少した</strong>
        」とある。しかもこの間、毎年減少している。割合だけでなく、65歳以上の交通事故死者数そのものも減っている。ただ、全年齢層の死者数はそれより早いペースで減り続けている。
      </>
    ),
    factfulness: (
      <>
        『ファクトフルネス』の第2章では、世の中が悪くなっているという思い込み「
        <strong>ネガティブ本能</strong>
        」について書かれている。高齢者の交通事故死者数はどんどん増えていると思いがちだが、実際はそうではない。
      </>
    ),
    trust: (
      <>
        高齢者の人口は分かっているし、死者が出た交通事故は今回のソース元である警察がほぼ正確に把握していると思われる。
      </>
    ),
    answer: 'a'
  },
  {
    type: '移民',
    text:
      '2018年の日本において、人口の約何パーセントが「在留外国人」でしょう？',
    short: '在留外国人の割合',
    choices: {
      a: '2%',
      b: '5%',
      c: '8%'
    },
    explanation: (
      <>
        <ExternalLink href="http://www.moj.go.jp/nyuukokukanri/kouhou/nyuukokukanri04_00076.html">
          法務省による執筆時最新のデータによれば
        </ExternalLink>
        、2018年6月末における在留外国人数は<strong>約264万人</strong>
        。これは中長期在留者数(約231万人)と特別永住者数(約33万人)を足した数。
        <ExternalLink href="http://www.stat.go.jp/data/jinsui/pdf/201807.pdf">
          総務省によれば
        </ExternalLink>
        、同時期の日本の人口は1億2659万人なので、在留外国人数の割合は
        <strong>2.1%</strong>となる。
      </>
    ),
    factfulness: (
      <>
        『ファクトフルネス』の第5章では、実際よりも数字を大きくとらえてしまう思い込み「
        <strong>過大視本能</strong>
        」について書かれている。在留外国人数のように、総数ではなく割合を見ると、意外と小さな数字だと思えることは多い。
      </>
    ),
    trust: (
      <>
        不法滞在もあるかもしれないが、全体の264万人に比べれば誤差の範囲だろう。
        この質問に5%と答えた人は実際より400万人、8%と答えた人は実際より800万人も多くの在留外国人がいる、と考えていたことになる。それほどの人数になるには、毎年40万人の外国人を受け入れても、単純計算でそれぞれ10年・20年近くかかる。
      </>
    ),
    answer: 'a'
  },
  {
    type: '地方行政',
    subtext:
      'ちなみに「地方公務員」には、福祉、福祉を除く一般行政、教育、警察、消防、公営企業会計などの部門が含まれます。',
    text:
      '2017年の日本において、15~64歳人口の約何パーセントが「地方公務員」として働いているでしょう？',
    short: '地方公務員の割合',
    choices: {
      a: '4%',
      b: '8%',
      c: '12%'
    },
    explanation: (
      <>
        <ExternalLink href="http://www.soumu.go.jp/iken/kazu.html">
          総務省による執筆時最新のデータによれば
        </ExternalLink>
        、2017年の地方公務員の総職員数は<strong>約274万人</strong>
        。これには福祉部門、福祉を除く一般行政部門、教育部門、警察部門、消防部門、公営企業等会計部門が含まれている。一方、15〜64歳人口は同じく
        <ExternalLink href="https://www.stat.go.jp/data/jinsui/2017np/index.html">
          総務省によると
        </ExternalLink>
        7596万人。割合を計算すると<strong>3.6%</strong>
        となるので、四捨五入して約4%とした。
      </>
    ),
    trust: (
      <>
        人口や地方公務員の人数はほぼ誤差がなく把握されているのではないか。この質問に8%と答えた人は実際の倍、12%と答えた人は実際の3倍の地方公務員がいると考えていることになる。
      </>
    ),
    answer: 'a'
  },
  {
    type: '女性の教育',
    text:
      '2018年の日本において、大学の博士課程に在籍している学生のうち、女性の割合は約何パーセントでしょう？',
    short: '女性の博士課程在学者の割合',
    choices: {
      a: '10%',
      b: '20%',
      c: '30%'
    },
    explanation: (
      <>
        文科省が作成した「
        <ExternalLink href="http://www.mext.go.jp/component/b_menu/other/__icsFiles/afieldfile/2018/12/25/1407449_1.pdf">
          学校基本調査(2018年版・執筆時最新)
        </ExternalLink>
        」 によれば、大学の博士課程に在籍している学生のうち、女性の割合は
        <strong>33.6%</strong>
        で過去最高。進歩の誇張を避けるため端数を切り捨てて約30%とした。ちなみにこの割合が30%を超えたのは2005年頃。
      </>
    ),
    trust: (
      <>
        大学のデータを集計したものなので、おそらく誤差は少ないだろう。ちなみにこの調査によれば、博士課程在学者数は全体で約7万4000人で、うち女性は約2万5000人。この質問に20%と答えた人は、実際より1万人も博士課程の女性が少ないと考えていたことになる。
      </>
    ),
    answer: 'c'
  },
  {
    type: 'ITの普及',
    text:
      '2017年の日本において、個人におけるスマートフォンの保有率は約何パーセントでしょう？',
    short: 'スマホの普及率',
    choices: {
      a: '60%',
      b: '75%',
      c: '90%'
    },
    explanation: (
      <>
        総務省が作成した「
        <ExternalLink href="http://www.soumu.go.jp/johotsusintokei/whitepaper/ja/h30/html/nd252110.html">
          情報通信白書(2018年版・執筆時最新)
        </ExternalLink>
        」 によれば、2017年の個人におけるスマートフォンの保有率は
        <strong>60.9%</strong>
        。2016年の56.8%から微増した。それほど高くないのは、高齢者のスマートフォン保有率が低いことが原因だろう。
        <ExternalLink href="http://www.soumu.go.jp/johotsusintokei/whitepaper/ja/h30/html/nd142110.html">
          同白書によれば、
        </ExternalLink>
        20代や30代でスマホ保有率が90%を超えているのに対し、60代の保有率は45%、70代は19%、80歳以上は6%だ。
      </>
    ),
    trust: (
      <>
        抽出調査(n=約4万)だが、
        <ExternalLink href="http://www.soumu.go.jp/johotsusintokei/statistics/statistics05.html">
          調査の概要と調査票はこちらに公開されている
        </ExternalLink>
        。これを見る限り問題はなさそうだ。
      </>
    ),
    answer: 'a'
  },

  {
    type: '国防と女性の働き方',
    text:
      '自衛隊における女性自衛官(事務官を除く)の割合は、平成の30年間でどう変化したでしょう？',
    short: '女性自衛官の割合',
    choices: {
      a: 'あまり変わっていない',
      b: '約1.5倍になった',
      c: '2倍以上になった'
    },
    explanation: (
      <>
        防衛省が作成した 「
        <ExternalLink href="http://www.mod.go.jp/j/publication/wp/wp2018/html/n33203000.html#zuhyo03030201">
          防衛白書(2018年版・執筆時最新)
        </ExternalLink>
        」
        によれば、平成元年に全体の3%以下だった女性自衛官(事務官を除く)は、2017年に
        <strong>6.5%</strong>
        と2倍以上になった。まだ低いが、平成の30年間で比率が倍増したことに代わりはない。ちなみに自衛隊の事務官を見ると、2017年時点で全事務官の約4人に1人が女性だ。防衛省が掲げる「女性職員の活躍推進とワークライフバランス推進のための取組計画」では、自衛隊で働く女性の採用・登用について具体的な数値目標が掲げられている。
      </>
    ),
    trust: (
      <>
        自衛隊の人数についてのデータはほぼ正確だろう。これが間違っていたら国を守れるはずがない。
      </>
    ),
    answer: 'c'
  },
  {
    type: 'エネルギー',
    text:
      '国が必要な一次エネルギーのうち、自国内で確保できる比率を「エネルギー自給率」といいます。東日本大震災が起きる前の2010年に比べ、2016年のエネルギー自給率はどう変化したでしょう？',
    short: 'エネルギー自給率',
    choices: {
      a: '震災前とあまり変わっていない',
      b: '震災前の75%程度になった',
      c: '震災前の半分以下になった'
    },
    explanation: (
      <>
        経産省が作成した「
        <ExternalLink href="http://www.enecho.meti.go.jp/about/whitepaper/2018html/2-1-1.html">
          エネルギー白書(2018年版・執筆時最新)
        </ExternalLink>
        」によれば、2010年の日本のエネルギー自給率は20.2%だったが、その後原発に頼れなくなり、
        <strong>2012年以降は毎年10%以下</strong>になった。2016年の自給率は
        <strong>8.3%</strong>。これはOECD諸国で見ても
        <ExternalLink href="http://www.enecho.meti.go.jp/about/special/johoteikyo/energyissue2018.html">
          最下位レベル
        </ExternalLink>
        。
      </>
    ),
    trust: (
      <>
        エネルギー自給率は「エネルギーの国内算出」を「一次エネルギー供給量」で割った数だ。どちらの数字も1990年以降、資源エネルギー庁が「総合エネルギー統計」の中で計算している。誤差は少しはあるだろうが、震災前の半分以下というざっくりとした範囲にはおさまるだろう。
      </>
    ),
    answer: 'c'
  },
  {
    type: '観光業',
    text:
      '2018年に訪日外国人旅行者数が3000万人を突破しました。では、東日本大震災が起きる前の2010年、訪日外国人旅行者数は何人だったでしょう？',
    short: '以前の訪日外国人旅行者数',
    choices: {
      a: '1000万人以下',
      b: '1000万人〜2000万人',
      c: '2000万人〜3000万人'
    },
    explanation: (
      <>
        国土交通省が作成した「
        <ExternalLink href="http://www.mlit.go.jp/common/001260951.pdf">
          観光白書(2018年版・執筆時最新)
        </ExternalLink>
        」によれば、2010年の訪日外国人旅行者数は<strong>約861万人</strong>
        と、いまの3分の1以下だった。震災が起きた2011年には約622万人に減ったが、その後は急回復。2013年に史上初の1000万人突破、2016年に2000万人突破、そして2018年に3000万人を突破した(
        <ExternalLink href="https://www.jnto.go.jp/jpn/news/press_releases/pdf/181219.pdf">
          速報値
        </ExternalLink>
        )。たった8年間で3倍以上になったわけだ。
      </>
    ),
    trust: (
      <>
        誤差はあるかもしれないが、1000万人以下というざっくりとした範囲にはおさまるだろう。
      </>
    ),
    answer: 'a'
  },
  {
    type: 'スポーツ',
    text:
      '1964年に行われた東京オリンピックの後、2019年までに12回の夏季オリンピックが行われました。1964年の東京オリンピックよりも日本が多く金メダルを獲得したのは、この12回のうち何回でしょう？',
    short: 'オリンピックの金メダル獲得数',
    choices: {
      a: 'ゼロ回',
      b: '3回',
      c: '6回'
    },
    explanation: (
      <>
        1964年の東京オリンピックで日本は16個の金メダルを獲得した。これより多く日本が金メダルを獲得した大会は無い。ちなみに2004年のアテネオリンピックでも日本は16個の金メダルを獲得した。また、金メダル獲得数の順位でも、1964年の東京オリンピックが3位と過去最高順位だった。(1968年のメキシコシティでも同じく3位だった。){' '}
        メダルのデータは
        <ExternalLink href="https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%AA%E3%83%B3%E3%83%94%E3%83%83%E3%82%AF%E3%81%AE%E6%97%A5%E6%9C%AC%E9%81%B8%E6%89%8B%E5%9B%A3">
          Wikipediaにわかりやすくまとまっている
        </ExternalLink>
        。いかに1964年の東京オリンピックが日本にとって栄光の大会だったかがわかる。
      </>
    ),
    trust: <>さすがにメダルの数は疑いようがない。</>,
    answer: 'a'
  },
  {
    type: '国際協力',
    text:
      '2016年に日本政府が政府開発援助(ODA)に基づき「返済不要の資金協力」を行った国の数は、世界195カ国のうち約何%の国にあたるでしょう？',
    short: '国際協力の対象国数',
    choices: {
      a: '20%',
      b: '40%',
      c: '70%'
    },
    answer: 'c',
    explanation: (
      <>
        外務省が作成した「
        <ExternalLink href="https://www.mofa.go.jp/mofaj/gaiko/oda/files/000367699.pdf">
          ODA白書(2017年版・執筆時最新)
        </ExternalLink>
        」によれば、2012年〜2016年の政府開発援助(ODA)の
        <strong>対象国は145カ国</strong>
        。そのうち2016年に無償資金協力を行わなかったのはトルクメニスタン、ドミニカ国、トリニダード・トバゴ、バルバドス、リビア、赤道ギニア、モーリシャス、アルバニアの8カ国のみ。他の国には2016年に少額でも返済不要の資金協力を行っていた。つまり
        <strong>195カ国中137カ国＝70%となる</strong>
        。もちろん、この145カ国にはそれ以外にも円借款や技術協力を行っている。
      </>
    ),
    trust: (
      <>
        提供した資金の額ならまだしも、提供先の「国の数」は誤差がまったくないと言っていいだろう。
      </>
    )
  },
  {
    type: '農業',
    text:
      '2015年の日本において、農産物の販売金額のうち、家族農業ではない「法人の経営体」が占める割合は約何パーセントでしょう？',
    short: '農業における法人経営体数',
    choices: {
      a: '5%',
      b: '15%',
      c: '25%'
    },
    explanation: (
      <>
        農林水産省が作成した「
        <ExternalLink href="http://www.maff.go.jp/j/wpaper/w_maff/h28/attach/pdf/zenbun-66.pdf">
          食料・農業・農村白書(2016年)
        </ExternalLink>
        」には、5年に1度行われる調査「農林業センサス」のデータが載っている。それによると、「農産物販売金額全体に占める法人経営体の販売金額シェア」は2005年は約15%だったが、2010年には約21%になり、
        <strong>2015年には約27%になった</strong>
        。日本の農業は長らく家族農業が主体だったが、法人経営の存在感が増してきているということだ。労働人口を見ても、販売農家における常雇い人数が10年間で1.6倍になるなど、世帯員から雇用者への労働力のシフトも進展している。(常雇いとは、7か月以上の期間を定めて雇った人のこと。)
      </>
    ),
    trust: (
      <>誤差は少しはあるかもしれないが、25%から大きく外れることはないだろう。</>
    ),
    answer: 'c'
  }
]

export const score = selectedAnswers =>
  selectedAnswers.filter((answer, index) => problems[index].answer === answer)
    .length
