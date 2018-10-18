<template>
  <div class="uk-container">
    <h1 class='uk-light'>Save & Load</h1>
    <vk-card>
      <vk-button @click="save"> Save state </vk-button>

      <template v-if='saved.length === 0'>
          <p> You haven't saved anything yet. </p>
      </template>

      <template v-else>
        <vk-table :data="pagedData">
          <vk-table-column title="Day" cell="day"></vk-table-column>
          <vk-table-column expanded title="Funds" cell='funds'>
             <span slot-scope="{ cell }">{{ cell | currency }}</span>
          </vk-table-column>
          <vk-table-column expanded title="Date" cell='date'>
             <span slot-scope="{ cell }">{{ cell | timestampFormat}}</span>
          </vk-table-column>
          <vk-table-column cellMiddle title="Actions">
            <div slot-scope="{ row }">
              <vk-icon-button
                v-vk-tooltip="'Load'"
                style='margin-right: 10px'
                @click='loadState(row)'
                icon='pull'>
              </vk-icon-button>
              <vk-icon-button
                v-vk-tooltip="'Delete'"
                @click='deleteState(row)'
                icon='trash'>
              </vk-icon-button>
            </div>
          </vk-table-column>
        </vk-table>

        <vk-pagination :page.sync="page" :perPage="len" :total="saved.length">
          <vk-pagination-page-prev></vk-pagination-page-prev>
          <vk-pagination-pages></vk-pagination-pages>
          <vk-pagination-page-next></vk-pagination-page-next>
        </vk-pagination>
      </template>

    </vk-card>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';

export default {
  data: () => ({
    page: 1,
    len: 5,
  }),
  computed: {
    ...mapState([
      'saved',
    ]),
    pagedData() {
      const begin = (this.page - 1) * this.len;
      const end = this.page * this.len;
      return this.saved.slice(begin, end);
    },
  },
  methods: {
    deleteState(row) {
      const key = this.saved.findIndex(d => d.date === row.date);
      this.DELETE_SAVED_STATE(key);
    },
    loadState(row) {
      const key = this.saved.findIndex(d => d.date === row.date);
      this.LOAD_STATE(key);
    },
    save() {
      this.SAVE_STATE();
    },
    ...mapMutations([
      'SAVE_STATE',
      'LOAD_STATE',
      'DELETE_SAVED_STATE',
    ]),
  },
  filters: {
    timestampFormat(value) {
      const date = new Date();
      date.setTime(value);
      return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    },
  },
};
</script>

<style>

</style>
