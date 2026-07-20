/* Copy this file to data.js and add personal trips. */
window.TRAVEL_PLAN = {
  year: 2026,
  goal: { quarters: 4, minNights: 3, minDays: 4 },
  plans: []
};

window.TRIPS = [{
  id: "sample",
  title: "サンプル旅行",
  subtitle: "旅程の例",
  start: "2026-01-01",
  end: "2026-01-02",
  days: [{
    date: "2026-01-01",
    title: "出発",
    items: [{time: "09:00", text: "駅を出発", tag: "move"}]
  }],
  checklist: [{text: "予約を確認", done: false}],
  costs: [{group: "交通", item: "サンプル", amount: 1000, paid: false}]
}];
