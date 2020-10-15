<template>
  <div>
    <div class="columns">
      <router-link class="column is-4" to="carcassonne"> <!--กำหนดโดบการใช้router-link ส่วนpathจะกำหนดโดยใช้ to ในการส่งชื่อpath -->
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/carcassonne.jpg" /> <!--เรียกรูปภาพออกมาใช้-->
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ cards.carcassonne.name }}</p>
              </div>
            </div>

            <div class="content">
              <p>จำนวนผู้เล่น : {{ cards.carcassonne.numberOfPlayers }} คน</p>
              <p>ระยะเวลาเล่น : {{ cards.carcassonne.durationOfPlay }} นาที</p>
            </div>
          </div>
        </div>
        <br />
      </router-link>
      
      <router-link class="column is-4" to="catan">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/catan.jpg" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ cards.catan.name }}</p>
              </div>
            </div>

            <div class="content">
              <p>จำนวนผู้เล่น : {{ cards.catan.numberOfPlayers }} คน</p>
              <p>ระยะเวลาเล่น : {{ cards.catan.durationOfPlay }} นาที</p>
            </div>
          </div>
        </div>
        <br />
      </router-link 
      >
      <router-link class="column is-4" to="deception">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/deception.jpg" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ cards.deception.name }}</p>
              </div>
            </div>

            <div class="content">
              <p>จำนวนผู้เล่น : {{ cards.deception.numberOfPlayers }} คน</p>
              <p>ระยะเวลาเล่น : {{ cards.deception.durationOfPlay }} นาที</p>
            </div>
          </div>
        </div>
        <br />
      </router-link>
    </div>

    <div class="columns">
      <router-link class="column is-4" to="jaws">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/jaws.jpg" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ cards.jaws.name }}</p>
              </div>
            </div>

            <div class="content">
              <p>จำนวนผู้เล่น : {{ cards.jaws.numberOfPlayers }} คน</p>
              <p>ระยะเวลาเล่น : {{ cards.jaws.durationOfPlay }} นาที</p>
            </div>
          </div>
        </div>
        <br />
      </router-link>

      <router-link class="column is-4" to="mansions">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/mansions.jpg" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ cards.mansions.name }}</p>
              </div>
            </div>

            <div class="content">
              <p>จำนวนผู้เล่น : {{ cards.mansions.numberOfPlayers }} คน</p>
              <p>ระยะเวลาเล่น : {{ cards.mansions.durationOfPlay }} นาที</p>
            </div>
          </div>
        </div>
        <br />
      </router-link>

      <router-link class="column is-4" to="pandemic">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/pandemic.jpg" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ cards.pandemic.name }}</p>
              </div>
            </div>

            <div class="content">
              <p>จำนวนผู้เล่น : {{ cards.pandemic.numberOfPlayers }} คน</p>
              <p>ระยะเวลาเล่น : {{ cards.pandemic.durationOfPlay }} นาที</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardGameList",
  data() {
    return {
      cards: {//เก็บข้อมูลของboardgameไว้ในcardsเป็นobject
        carcassonne: {
          name: "Carcassonne", //ชื่อเกม
          numberOfPlayers: "2-5", //จำนวนคนที่เล่น
          durationOfPlay: "30-45", //ระยะเวลาในการเล่น
        },
        catan: {
          name: "CATAN",
          numberOfPlayers: "3-4",
          durationOfPlay: "60-120",
        },
        deception: {
          name: "Deception : Murder in Hong Kong",
          numberOfPlayers: "4-12",
          durationOfPlay: "20-30",
        },
        jaws: {
          name: "JAWS",
          numberOfPlayers: "2-4",
          durationOfPlay: "40-60",
        },
        mansions: {
          name: "Mansions of Madness",
          numberOfPlayers: "2-5",
          durationOfPlay: "120-240",
        },
        pandemic: {
          name: "Pandemic",
          numberOfPlayers: "2-4",
          durationOfPlay: "45-60",
        },
      },
    };
  },
};
</script>

<style>
</style>