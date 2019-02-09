for i in {1..95}
do
   curl -H "Content-Type: application/json" -X POST https://exp.host/--/api/v2/push/send -d '{
  "to": "ExponentPushToken[41YUpZEhHINpojSNeoCxAU]",
  "title":"hello",
  "body": "world",
  "data": {
  "importance": [1],
  "message": {
    "toastCopy": "Test test."
  },
  "socket": null,
  "status": "success",
  "timeStamp": "2018-05-21T17:41:18-04:00",
  "type": "toast"
  }
}'
done