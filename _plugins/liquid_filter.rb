module RenderFilter
  def liquid(input)
    Liquid::Template.parse(input).render(@context.registers)
  end
end

Liquid::Template.register_filter(RenderFilter)
