<template>
    <div class="max-w-xl mx-auto post">
        <ContentDoc>
            <template #not-found>
                <h2>Post slug ({{ $route.params.slug }}) not found</h2>
            </template>
        </ContentDoc>
    </div>
</template>
