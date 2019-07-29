// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

console.log("script is running...");

function myAlarm(wakeup)
{
    console.log("Hey, Drew Wake up! It's "+wakeup);
}
myAlarm('7:30am');



function momAlarm (wakeup) {
    console.log("Hey, Mom Wake up! It's "+wakeup);
};

momAlarm('6:00am');

function familyAlarm (name,wakeup)  {

    console.log("Hey," +name +"wake up it's "+wakeup)
};

familyAlarm ("Family ","7:00am");


function importantAlarm (wakeup){
    console.log(wakeup.toUpperCase())
};
importantAlarm("wakeup now!!!");

function snoozeAlarm(num)

{
    let snooze = num +1
    return (snooze + num) 
}

console.log( snoozeAlarm(700));

