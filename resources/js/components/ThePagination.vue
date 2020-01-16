<template>
    <nav v-if="pagination.last_page !== 1">
        <ul class="pagination">
            <li class="page-item disabled" aria-disabled="true" aria-label="Previous" v-if="pagination.current_page === 1">
                <span aria-hidden="true" class="page-link">&lsaquo;</span>
            </li>
            <li class="page-item" v-else>
                <router-link :to="{ query: { ...this.$route.query, page: pagination.current_page-1 } }" rel="prev" aria-label="Previous" class="page-link">&lsaquo;</router-link>
            </li>

            <div v-for="element in elements" :key="element">
                <li class="page-item disabled" aria-disabled="true" v-if="typeof element == 'string'"><span class="page-link">{{ element }}</span></li>
                <div v-else>
                    <li class="page-item active" aria-current="page" v-if="element == pagination.current_page"><span class="page-link">{{ element }}</span></li>
                    <li class="page-item" v-else><router-link :to="{ query: { ...$route.query, page: element } }" class="page-link">{{ element }}</router-link></li>
                </div>
            </div>
            
            <li class="page-item" v-if="pagination.next_page_url">
                <router-link :to="{ query: { ...this.$route.query, page: pagination.current_page+1 } }" class="page-link" rel="next" aria-label="Next">&rsaquo;</router-link>
            </li>

            <li class="page-item disabled" aria-disabled="true" aria-label="Next" v-else>
                <span aria-hidden="true" class="page-link">&rsaquo;</span>
            </li>
        </ul>
    </nav>
</template>

<script>
import {mapGetters} from 'vuex'
import {pagination} from '../pagination'

export default {
  computed: {
    ...mapGetters({
        pagination: 'courses/pagination'
    }),

    elements () {
        const {current_page, last_page} = this.pagination;
        return pagination(current_page, last_page);
    }
  }
}
</script>
