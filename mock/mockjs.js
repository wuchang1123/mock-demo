var Mock = require('mockjs')
var Random = Mock.Random

Random.extend({
    mp3: function(date) {
        var constellations = [
            "http://cc.fp.ps.netease.com/file/598c69a85e60272a7aa54901PZybXG6c",
            "http://cc.fp.ps.netease.com/file/598b3fc0143cfa78e99929e86uB1rfLy",
            "http://cc.fp.ps.netease.com/file/598b376c96dee49df21d7f10ySMQkea3",
            "http://cc.fp.ps.netease.com/file/5989da5c7f9d2a8e6c2f0777oTBMRWGD",
            "http://cc.fp.ps.netease.com/file/5989d85b5e6027adff9171fbMZP18hey"
        ]
        return this.pick(constellations)
    }
})


const data = {
  records: [],
  lotterys: []
};
for (let i = 0; i < 30; i++) {
data.records.push({
  "updatetime": Random.time('yyyy-MM-dd HH:mm:ss'),
  "uid": Random.integer(1000, 9999),
  "nick": Random.cname(),
  "title": Random.string('壹贰叁肆伍陆柒捌玖拾', 3, 20),
  "cover": Random.image('96x69', Random.color()),
  "orig_url": Random.mp3(),
  "tc_url": Random.mp3(),
  "uploadtime": Random.time('yyyy-MM-dd HH:mm:ss'),
  "upload_client": "xqnyhhuodongye",
  "source": "xqnyh-audio",
  "state": 7,
  "_id": Random.integer(1000000, 9999999),
  "record_id": i,
  "votes": Random.integer(0, 1000),
  "desc": Random.cparagraph(1, 2)
})
}
for (let i = 0; i < 10; i++) {
data.lotterys.push({
  "uid": Random.integer(1000, 9999),
  "nick": Random.cname(),
  "name": Random.string('壹贰叁肆伍陆柒捌玖拾', 3, 10),
  "num": 4,
  "time": Random.time('MM月dd日 HH:mm:ss')
})
}

module.exports = data
