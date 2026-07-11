/*
 * 旅程データ
 * ─────────────────────────────────────────────
 * このファイルを編集して旅行を追加・更新します（アプリ内に登録機能はありません）。
 * 「北海道旅行にこの予定を追加して」等とClaudeに頼めば、ここを書き換えます。
 *
 * trip の形:
 *   id       : 一意のID（英数字）
 *   title    : 旅行名
 *   subtitle : サブタイトル（任意）
 *   start/end: "YYYY-MM-DD"（カウントダウン・並び替えに使用）
 *   days[]   : { date:"MM/DD", weekday:"金", title:"...", items:[ {time,text,tag} ] }
 *              tag は "move"(移動) / "stay"(宿泊) / "spot"(観光) / "meal"(食事) / "" のいずれか
 *   checklist: [ {text, done} ]
 *   costs[]  : { group:"航空券", item:"...", amount:12345, paid:true, note:"" }
 *   people   : 人数（任意、1人あたり表示用） / budget: 予算（任意）
 */
window.TRIPS = [
  {
    id: "hokkaido2026",
    title: "北海道旅行",
    subtitle: "函館・札幌をめぐる5日間",
    start: "2026-07-17",
    end: "2026-07-21",
    days: [
      {
        date: "07/17", weekday: "金", title: "羽田 → 函館",
        items: [
          { time: "17:15", text: "羽田空港 出発", tag: "move" },
          { time: "18:45", text: "函館空港 到着", tag: "move" },
          { time: "", text: "空港連絡バスで函館駅前へ（約20分）", tag: "move" },
          { time: "", text: "夕食：ラッキーピエロ函館駅前店", tag: "meal" },
          { time: "", text: "函館駅→はこだてライナーで新函館北斗駅（約15–20分・440円）", tag: "move" },
          { time: "", text: "東横INN 新函館北斗駅南口 泊", tag: "stay" },
        ],
      },
      {
        date: "07/18", weekday: "土", title: "函館 終日",
        items: [
          { time: "", text: "函館 市内観光", tag: "spot" },
          { time: "", text: "夕食：旬菜旬魚たじま", tag: "meal" },
          { time: "", text: "東横INN 新函館北斗駅南口 泊", tag: "stay" },
        ],
      },
      {
        date: "07/19", weekday: "日", title: "函館 → 札幌",
        items: [
          { time: "10:05", text: "函館駅 出発（特急 北斗7号）", tag: "move" },
          { time: "14:01", text: "札幌 到着", tag: "move" },
          { time: "", text: "昼食：漢華林", tag: "meal" },
          { time: "", text: "ガトーキングダム へ", tag: "move" },
          { time: "", text: "夕食：アザバルバンバン", tag: "meal" },
          { time: "", text: "ガトーキングダム 泊", tag: "stay" },
        ],
      },
      {
        date: "07/20", weekday: "月", title: "札幌 終日",
        items: [
          { time: "", text: "朝食：ホテルのバイキング", tag: "meal" },
          { time: "", text: "札幌 市内観光", tag: "spot" },
          { time: "", text: "昼食：なごやか亭", tag: "meal" },
          { time: "", text: "アパホテル 札幌大通駅西 泊", tag: "stay" },
        ],
      },
      {
        date: "07/21", weekday: "火", title: "千歳 → 羽田",
        items: [
          { time: "10:55", text: "新千歳空港 出発", tag: "move" },
          { time: "12:30", text: "羽田空港 到着", tag: "move" },
        ],
      },
    ],
    checklist: [
      { text: "航空券（往復）予約", done: true },
      { text: "特急北斗 きっぷ手配", done: false },
      { text: "各ホテル 予約", done: true },
      { text: "函館・札幌の行きたい店をリスト化", done: false },
    ],
    costs: [
      { group: "航空券", item: "行き（羽田→函館）", amount: 17400, paid: true, note: "" },
      { group: "航空券", item: "帰り（千歳→羽田）", amount: 18900, paid: true, note: "" },
      { group: "電車", item: "特急 北斗（函館→札幌）", amount: 9770, paid: false, note: "" },
      { group: "ホテル", item: "東横INN 新函館北斗駅南口", amount: 10073, paid: true, note: "カード決済" },
      { group: "ホテル", item: "ガトーキングダム", amount: 5400, paid: false, note: "現地決済" },
      { group: "ホテル", item: "アパホテル 札幌大通駅西", amount: 4275, paid: true, note: "カード決済" },
      { group: "食事", item: "ラッキーピエロ函館駅前店（夕食）", amount: 2000, paid: false, note: "概算" },
      { group: "食事", item: "旬菜旬魚たじま（夕食）", amount: 6000, paid: false, note: "概算" },
      { group: "食事", item: "漢華林（昼食）", amount: 3000, paid: false, note: "概算" },
      { group: "食事", item: "アザバルバンバン（夕食）", amount: 8000, paid: false, note: "概算" },
      { group: "食事", item: "ホテルのバイキング（朝食）", amount: 2000, paid: false, note: "概算" },
      { group: "食事", item: "なごやか亭（昼食）", amount: 3000, paid: false, note: "概算" },
    ],
  },

  {
    id: "takamatsu2025",
    title: "高松・松山",
    subtitle: "瀬戸内アートと温泉を巡る旅",
    start: "2025-04-28",
    end: "2025-05-04",
    days: [
      {
        date: "04/28", weekday: "月", title: "横浜 → サンライズ瀬戸（車中泊）",
        items: [
          { time: "21:35", text: "横浜駅 出発／寝台特急サンライズ瀬戸（13〜15号車）", tag: "move" },
          { time: "", text: "車中泊（東京駅発は21:00）", tag: "stay" },
        ],
      },
      {
        date: "04/29", weekday: "火", title: "豊島（てしま）アートめぐり",
        items: [
          { time: "07:27", text: "高松駅 到着 → ホテルに荷物を預ける", tag: "move" },
          { time: "09:02", text: "高松港発フェリー（1,450円）", tag: "move" },
          { time: "09:37", text: "豊島・家浦港 到着 → 徒歩で美術館へ（約50〜60分）", tag: "move" },
          { time: "11:00", text: "豊島美術館（予約済）", tag: "spot" },
          { time: "12:30", text: "豊島美術館カフェ／唐櫃でランチ", tag: "meal" },
          { time: "15:10", text: "家浦港発 → 15:45 高松港着", tag: "move" },
          { time: "16:15", text: "栗林公園（特別名勝）散策", tag: "spot" },
          { time: "18:00", text: "ホテル チェックイン／夜は讃岐うどん・骨付鳥", tag: "meal" },
          { time: "", text: "Tabist シティホテルパティオ（高松）泊", tag: "stay" },
        ],
      },
      {
        date: "04/30", weekday: "水", title: "直島（なおしま）アートめぐり",
        items: [
          { time: "08:12", text: "高松港発フェリー（四国汽船 520円）", tag: "move" },
          { time: "09:02", text: "直島・宮浦港 到着 → 徒歩で地中美術館へ（約40分）", tag: "move" },
          { time: "10:15", text: "地中美術館（予約済／安藤忠雄・モネ睡蓮）", tag: "spot" },
          { time: "12:00", text: "直島新美術館（安藤忠雄設計・2025開館）", tag: "spot" },
          { time: "13:00", text: "本村地区でランチ", tag: "meal" },
          { time: "14:20", text: "宮浦港発 → 15:20 高松港着／夕方は市内自由", tag: "move" },
          { time: "", text: "Tabist シティホテルパティオ（高松）泊", tag: "stay" },
        ],
      },
      {
        date: "05/01", weekday: "木", title: "こんぴらさん参拝 → 松山へ",
        items: [
          { time: "", text: "高松駅→琴平駅（JR予讃線 約55分・860円）", tag: "move" },
          { time: "", text: "金刀比羅宮 参拝（御本宮まで785段）", tag: "spot" },
          { time: "", text: "表参道で讃岐うどん・名物スイーツ", tag: "meal" },
          { time: "14:20", text: "琴平→善通寺（JR約5分）→高速善通寺へ徒歩", tag: "move" },
          { time: "15:25", text: "坊っちゃんエクスプレス（高速善通寺発・松山行）", tag: "move" },
          { time: "18:00", text: "松山 到着 → ホテル チェックイン／夜は鯛めし", tag: "meal" },
          { time: "", text: "スマイルホテル松山 泊", tag: "stay" },
        ],
      },
      {
        date: "05/02", weekday: "金", title: "松山城・道後温泉",
        items: [
          { time: "", text: "松山城 見学（現存12天守・ロープウェイ/リフト）", tag: "spot" },
          { time: "", text: "大街道など松山市内を自由散策", tag: "spot" },
          { time: "16:00", text: "ホテル アビス松山 チェックイン", tag: "stay" },
          { time: "", text: "道後温泉本館 入浴（夜はライトアップ）", tag: "spot" },
          { time: "", text: "県庁前 ホテルアビス松山 泊", tag: "stay" },
        ],
      },
      {
        date: "05/03", weekday: "土", title: "松山土産 → 帰路",
        items: [
          { time: "", text: "道後温泉商店街でお土産（坊っちゃん団子・じゃこ天・今治タオル）", tag: "spot" },
          { time: "16:20", text: "松山駅発 坊っちゃんエクスプレス（座席5B・5A）", tag: "move" },
          { time: "19:10", text: "高松駅前バスターミナル 到着", tag: "move" },
          { time: "22:00", text: "高松駅発 サンライズ瀬戸（13〜15号車）", tag: "move" },
          { time: "", text: "車中泊", tag: "stay" },
        ],
      },
      {
        date: "05/04", weekday: "日", title: "帰着",
        items: [
          { time: "06:35", text: "横浜駅 到着", tag: "move" },
          { time: "07:00", text: "東京駅 到着", tag: "move" },
        ],
      },
    ],
    checklist: [
      { text: "サンライズ瀬戸（往復）", done: true },
      { text: "地中美術館（直島・日時指定）", done: true },
      { text: "直島新美術館（日時指定）", done: true },
      { text: "豊島美術館（日時指定）", done: true },
      { text: "坊っちゃんエクスプレス（5/1・5/3）", done: true },
    ],
    costs: [
      { group: "交通", item: "サンライズ瀬戸（往復・2名分）", amount: 60880, paid: true, note: "" },
      { group: "宿泊", item: "ホテルパティオ（高松・2泊）", amount: 15700, paid: true, note: "" },
      { group: "宿泊", item: "スマイルホテル松山（1泊）", amount: 6400, paid: true, note: "" },
      { group: "宿泊", item: "ホテルアビス松山（1泊）", amount: 15500, paid: true, note: "" },
    ],
  },
];
