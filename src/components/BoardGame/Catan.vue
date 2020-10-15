<template>
  <section>
    <div class="topic">
      <p class="is-size-2 has-text-weight-semibold">CATAN (คาธาน)</p>
    </div>
    <img class="thisImage" src="../../assets/catan.jpg" />
    <div class="detail">
      <p class="is-size-5 has-text-weight-medium">จำนวนผู้เล่น : 3-4 คน</p>
      <p class="is-size-5 has-text-weight-medium">ระยะเวลาเล่น : 60-120 นาที</p>
      <br />
      <p class="is-size-5 has-text-weight-medium">
        The Settlers of Catan
        บอร์ดเกมในตำนานที่ฮอตฮิตไปทั่วโลกจนถึงขนาดมีการจัดแข่งขันชิงแชมป์โลกติดต่อกันหลายปี
        โดยในเกม Catan
        ผู้เล่นแต่ละคนจะได้รับบทบาทเป็นผู้บุกเบิกเข้าไปตั้งรกรากบนเกาะคาธาน
        โดยมีเป้าหมายคือขยับขยายเมืองให้เติบโตกว่าคู่แข่งบนกระดาน
      </p>
      <br />
      <p class="is-size-5 has-text-weight-medium">
        ในแต่ละรอบผู้เล่นจะได้รับทรัพยากรต่างๆ เช่น อิฐ หิน ไม้ ข้าว ฯลฯ
        และสามารถทำการค้า เจรจาต่อรอง
        เพื่อแลกเปลี่ยนทรัพยากรกับผู้เล่นคนอื่นหรือท่าเรือได้ โดยจะได้รับ
        Victory Point จากการกระทำต่างๆ อาทิ สร้างหมู่บ้าน อัพเกรดเมือง ฯลฯ
        ซึ่งคนที่สามารถพัฒนาเมือง จนได้รับครบ 10 คะแนนก่อน ก็จะเป็นผู้ชนะไป
      </p>
      <br />
      <p class="is-size-5 has-text-weight-medium">
        แม้ว่ากฎกติกาอาจจะสลับซับซ้อนสำหรับมือใหม่หัดเล่นในช่วงแรก
        แต่ถ้าได้ลองทำความเข้าใจและลงสนามจริงสักรอบ ขอบอกเลยว่าติดหนึบแน่นอน!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Catan",
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