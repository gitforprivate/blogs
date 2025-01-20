<template>
    <div class="project-container">
        <div v-for="item in projectsInfo">
            <a v-if="item.link" class="m-nav-link" :href="item.link" target="_blank" rel="noreferrer">
                <article class="box">
                    <div class="box-header">
                        <div v-if="!!item?.icon && getSvg(item?.icon)" class="icon" v-html="getSvg(item?.icon)"></div>
                        <div v-else-if="!!item?.icon && typeof item.icon === 'string'" class="icon">
                            <img :src="item?.icon" :alt="item.title" />
                        </div>
                        <h5 v-if="item.title" class="title">{{ item.title }}</h5>
                    </div>
                    <p v-if="item.desc" class="desc">{{ item.desc }}</p>
                </article>
            </a>
        </div>
    </div>

</template>
<script setup lang="ts">
import { projectsInfo } from '../projectInfo'
import { withBase } from 'vitepress'
function getSvg(icon: string | { svg: string }) {
    if (typeof icon !== 'string' && icon.svg) {
        return icon.svg;
    }
    return '';  // 如果不是对象或没有 svg 属性，返回空字符串
}
</script>
<style scoped>
.project-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-auto-flow: row dense;
    justify-content: center;
    margin-top: 10px
}

.m-nav-link {
    --m-nav-icon-box-size: 40px;
    --m-nav-icon-size: 24px;
    --m-nav-box-gap: 12px;

    display: block;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 8px;
    height: 100%;
    text-decoration: inherit;
    background-color: var(--vp-c-bg-alt);
    transition: all 0.25s;

    &:hover {
        box-shadow: var(--vp-shadow-2);
        border-color: var(--vp-c-brand);
        text-decoration: initial;
        background-color: var(--vp-c-bg);
    }

    .box {
        display: flex;
        flex-direction: column;
        padding: var(--m-nav-box-gap);
        height: 100%;
        color: var(--vp-c-text-1);

        &-header {
            display: flex;
            align-items: center;
        }
    }

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: calc(var(--m-nav-box-gap) - 2px);
        border-radius: 6px;
        width: var(--m-nav-icon-box-size);
        height: var(--m-nav-icon-box-size);
        font-size: var(--m-nav-icon-size);
        background-color: var(--vp-c-default-soft);
        transition: background-color 0.25s;

        :deep(svg) {
            width: var(--m-nav-icon-size);
            fill: currentColor;
        }

        :deep(img) {
            border-radius: 4px;
            width: var(--m-nav-icon-size);
        }
    }

    .title {
        overflow: hidden;
        flex-grow: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: var(--m-nav-icon-box-size);
        font-size: 16px;
        font-weight: 600;
    }

    .desc {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-grow: 1;
        margin: calc(var(--m-nav-box-gap) - 2px) 0 0;
        line-height: 1.5;
        font-size: 12px;
        color: var(--vp-c-text-2);
    }
}

@media (max-width: 960px) {
    .m-nav-link {
        --m-nav-icon-box-size: 36px;
        --m-nav-icon-size: 20px;
        --m-nav-box-gap: 8px;

        .title {
            font-size: 14px;
        }
    }
}
</style>
