<template>
  <section>
    <div class="topic">
      <p class="is-size-2 has-text-weight-semibold">Carcassonne (การ์กาซอน)</p>
    </div>
    <img class="thisImage" src="../../assets/carcassonne.jpg" />
    <div class="detail">
      <p class="is-size-5 has-text-weight-medium">จำนวนผู้เล่น : 2-5 คน</p>
      <p class="is-size-5 has-text-weight-medium">ระยะเวลาเล่น : 30-45 นาที</p>
      <br />
      <p class="is-size-5 has-text-weight-medium">
        ผ่านมาแล้วเกือบ 20 ปี แต่บอร์ดเกมยอดฮิตอย่าง Carcassonne ที่สร้างโดย
        Klaus-Jürgen Wrede ชาวเยอรมัน ยังคงครองใจผู้เล่นมากมาย
        กับแนวเกมสุดคลาสสิกอย่างการสร้างเมือง
      </p>
      <br />
      <p class="is-size-5 has-text-weight-medium">
        วิธีการเล่นคือผู้เล่นจะต้องผลัดกันสุ่มแผ่นไทล์ (แผ่นแผนที่)
        เพื่อนำมาต่อกัน โดยแต่ละตาผู้เล่นสามารถวางตัว Meeple
        ลงไปบนแผ่นไทล์ที่เพิ่งวางลงไปได้ได้คนละ 1 ตัว ( 1 เกมจะได้รับตัว Meeple
        คนละ 8 ตัว )
      </p>
      <br />
      <p class="is-size-5 has-text-weight-medium">
        โดยมีกฎอยู่ว่าเมื่อวางตัว Meeple
        ลงไปแล้วจะไม่สามารถเคลื่อนย้ายได้จนกว่าจะจบเกม และไม่สามารถวางตัว Meeple
        ลงไปในพื้นที่ที่มีตัว Meeple ตัวอื่นวางอยู่แล้ว
        (ไม่ว่าจะของคู่แข่งหรือของเราเองก็ตาม) ซึ่งการนับคะแนนว่าใครจะแพ้-ชนะ
        ขึ้นอยู่กับว่าใครจะสามารถต่อเมืองได้สมบูรณ์ก่อนกัน
      </p>
      <br />
      <p class="is-size-5 has-text-weight-medium">
        ความสนุกของเกมนี้อยู่ตรงที่เราจะได้ทั้งวางแผนพัฒนาเมืองให้สมบูรณ์โดยเร็วที่สุด
        ในขณะที่ก็สามารถจะถูกขัดขวางหรือเป็นผู้ขัดขวางไม่ให้คู่แข่งบนกระดานเดียวกันประกอบถนน,
        เมือง หรือโบสถ์ได้สำเร็จก่อนเรา
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Carcassonne",
};
</script>

<style>
.thisImage {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  margin-bottom: 20px;
}
.topic {
  text-align: center;
}
.detail {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}
</style>