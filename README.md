# 1015_hackathon

## process.env

 ### stein_API

 https://api.steinhq.com/v1/storages/634a4320eced9b09e9a004a5

 ### sheets
 url:https://docs.google.com/spreadsheets/d/1zW4G1-JMqzBywMqATXn6LOkuB3dR8_ohieTv3yJ3Wic

受付: reception
- name
- birth_day
- hope_for
- next
- temp_id

```javascript
- name: 名前
- birth_day: 生年月日
- hope_for: 希望する先生の部屋番号
- once_in: 最初に入った診察室
- next: 次の処理
    - 番号: 診察室
    - xp: レントゲン室
    - treat: 処置室
    - reh: リハビリ
    - account: 会計
    - finished: 会計終了
- update_time: 受付された時間(処理されるたびに変更)
- temp_id: 受付された時間のタイムスタンプで生成し、患者さんの特定に利用(変更しない)
- num: 受付番号として患者さんに表示

```